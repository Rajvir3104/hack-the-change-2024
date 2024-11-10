import json
import requests
import os

# Define the path to the JSON file in the main folder
json_file_path = os.path.join('..', 'job_results.json')

# Load the JSON data
with open(json_file_path, 'r') as f:
    data = json.load(f)

# URL of the Flask insert endpoint
url = 'http://127.0.0.1:5000/insert_item'

# Loop through each item in the JSON and send a POST request
for item in data:
    response = requests.post(url, json=item)
    try:
        # Attempt to parse the response as JSON
        response_data = response.json()
    except requests.JSONDecodeError:
        # If JSON decoding fails, print the raw response content and status code
        print("Failed to insert item; non-JSON response received:")
        print("Status Code:", response.status_code)
        print("Response Content:", response.text)
        continue

    # Print success or failure message based on the status code
    if response.status_code == 201:
        print("Item inserted successfully:", response_data)
    else:
        print("Failed to insert item:", response_data)
