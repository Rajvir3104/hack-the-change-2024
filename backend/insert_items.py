import json
import requests
import os
import sys

# Define a function to load JSON data from a file
def load_json_data(file_path):
    with open(file_path, 'r') as f:
        return json.load(f)

# Define a function to send data to the specified Flask endpoint
def send_data_to_endpoint(url, item):
    response = requests.post(url, json=item)
    try:
        return response.status_code, response.json()
    except requests.JSONDecodeError:
        return response.status_code, response.text

# Main function to handle data loading and posting
def main(table_name):
    # Define the path to the JSON file in the main folder
    lower_name = table_name.lower()
    json_file_path = os.path.join('..', f'{lower_name}_results.json')

    # Load the JSON data
    data = load_json_data(json_file_path)

    # URL of the Flask insert endpoint with the table name
    url = f'http://127.0.0.1:5000/{table_name}/insert_item'

    # Loop through each item in the JSON and send a POST request
    for item in data:
        status_code, response_data = send_data_to_endpoint(url, item)

        # Print success or failure message based on the status code
        if status_code == 201:
            print(f"Item inserted successfully into {table_name}:", response_data)
        else:
            print(f"Failed to insert item into {table_name}; Status Code: {status_code}")
            print("Response Content:", response_data)

# Entry point for the script
if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python data_loader.py <table_name>")
        sys.exit(1)

    table_name = sys.argv[1]
    main(table_name)
