import os
import requests
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Retrieve the API key
api_key = os.getenv("SCRAPINGDOG_API_KEY")

if not api_key:
    raise ValueError("API key not found in .env file.")

url = "https://api.scrapingdog.com/indeed"
job_search_url = "https://ca.indeed.com/jobs?q=entry+level&l=calgary%2C+ab&from=searchOnDesktopSerp&vjk=d30f3669868129c5"
params = {"api_key": api_key, "url": job_search_url}

response = requests.get(url, params=params)

if response.status_code == 200:
    json_response = response.json()
    print(json_response)
else:
    print(f"Error: {response.status_code}")
    print(response.text)
