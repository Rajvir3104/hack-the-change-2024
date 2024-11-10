import os

import boto3
from boto3.dynamodb.conditions import Attr
from botocore.exceptions import ClientError
from dotenv import load_dotenv
from flask import Flask, jsonify, request

load_dotenv()

app = Flask(__name__)

# Load AWS configuration from environment variables
AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
REGION_NAME = 'us-east-2'#os.getenv('REGION_NAME')

# Initialize DynamoDB resource
dynamodb = boto3.resource(
    'dynamodb',
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=REGION_NAME
)

table = dynamodb.Table('JobPostings')


@app.route('/get_item_by_location', methods=['GET'])
def get_item_by_location():
    value = request.args.get('location')
    try:
        response = table.scan(
            FilterExpression=Attr('Location').contains(value)
        )
        items = response.get('Items')
        if items:
            return jsonify(items)
        else:
            return jsonify({'error': 'Item not found'}), 404
    except ClientError as e:
        return jsonify({'error': str(e)}), 500


@app.route('/insert_item', methods=['POST'])
def insert_item():
    data = request.json
    
    # Map JSON fields to DynamoDB table fields
    item = {
        'Location': data.get('companyLocation'),
        'DatePosted': data.get('jobPosting'),  # Assuming jobPosting is the date in this case
        'Title': data.get('jobTitle'),
        'CompanyName': data.get('companyName'),
        'Desc': ' '.join(data.get('jobDescription', [])),  # Join description array into a single string
        'Link': data.get('jobLink')
    }

    try:
        # Insert item into DynamoDB table
        table.put_item(Item=item)
        return jsonify({'message': 'Item inserted successfully'}), 201
    except ClientError as e:
        return jsonify({'error': str(e)}), 500


@app.route('/delete_all_items', methods=['DELETE'])
def delete_all_items():
    try:
        # Scan to get all items (scan is required to retrieve all items for deletion)
        response = table.scan()
        items = response.get('Items', [])

        # Delete each item individually
        for item in items:
            table.delete_item(
                Key={
                    'Location': item['Location'],
                    'DatePosted': item['DatePosted']
                }
            )
        return jsonify({'message': 'All items deleted successfully'}), 200
    except ClientError as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
