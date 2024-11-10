import os
import requests
from dotenv import load_dotenv
import json

# Load environment variables from .env file
load_dotenv()

# Retrieve the API key
api_key = os.getenv("SCRAPPINGDOG_API_KEY")

if not api_key:
    raise ValueError("API key not found in .env file.")

# Define the ScrapingDog API endpoint
url = "https://api.scrapingdog.com/indeed"

# List to store job results
all_jobs = []

# Loop through pages and fetch jobs
num_pages = 5  # Number of pages to fetch (can adjust this number)
for page in range(num_pages):
    # Calculate the starting job index for pagination
    start_index = page * 10  # Each page typically contains 10 jobs

    # Define the search URL with pagination
    job_search_url = f"https://ca.indeed.com/jobs?q=part+time&l=Alberta&from=searchOnHP&vjk=c37a683349250d55&start={start_index}"

    params = {"api_key": api_key, "url": job_search_url}

    response = requests.get(url, params=params)

    if response.status_code == 200:
        json_response = response.json()

        # Check if we got jobs in the response
        if isinstance(json_response, list) and json_response:
            print(f"Page {page + 1}: Found {len(json_response)} jobs.")
            all_jobs.extend(json_response)  # Add the jobs to the list
        else:
            print(f"No jobs found on page {page + 1}.")
            break
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
        break

# Save the collected jobs data to a JSON file
with open("job_results.json", "w") as f:
    json.dump(all_jobs, f, indent=4)

print("Job data saved to job_results.json.")
