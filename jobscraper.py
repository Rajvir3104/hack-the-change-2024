import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Retrieve the API key
api_key = os.getenv("SCRAPPINGDOG_API_KEY")

if not api_key:
    raise ValueError("API key not found in .env file.")

# Define the ScrapingDog API endpoint
url = "https://api.scrapingdog.com/indeed"

# Loop through pages and fetch jobs
num_pages = 5  # Number of pages to fetch (can adjust this number)
for page in range(num_pages):
    # Calculate the starting job index for pagination
    start_index = page * 10  # Each page typically contains 10 jobs
    job_search_url = f"https://ca.indeed.com/jobs?q=part+time&l=Alberta&from=searchOnHP&vjk=c37a683349250d55&=start={start_index}"

    params = {"api_key": api_key, "url": job_search_url}

    response = requests.get(url, params=params)

    if response.status_code == 200:
        json_response = response.json()

        # Check if we got jobs in the response
        if isinstance(json_response, list) and json_response:
            print(f"Page {page + 1}:")
            print(json_response)
            print("\n" + "=" * 50 + "\n")
        else:
            print(f"No jobs found on page {page + 1}.")
            break
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
        break
