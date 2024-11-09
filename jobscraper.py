import requests
import json

url = "https://api.scrapingdog.com/indeed"
api_key = "672fb791d4a09bfeb8a26556"
job_search_url = "https://ca.indeed.com/jobs?q=entry+level&l=calgary%2C+ab&from=searchOnDesktopSerp&vjk=d30f3669868129c5"
# Set up the parameters
params = {"api_key": api_key, "url": job_search_url}
# Make the HTTP GET request
response = requests.get(url, params=params)
# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON content
    json_response = response.json()
    print(json_response)
else:
    print(f"Error: {response.status_code}")
    print(response.text)
