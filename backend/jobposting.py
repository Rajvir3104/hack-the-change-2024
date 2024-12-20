from boto3.dynamodb.conditions import Attr
from botocore.exceptions import ClientError
from flask import Blueprint, g, jsonify, request

jobpostingroutes = Blueprint('jobpostingroutes', __name__, url_prefix='/JobPostings')


@jobpostingroutes.route('/get_item_by_location', methods=['GET'])
def get_item_by_location():
    table = g.dynamodb.Table('JobPostings')

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


@jobpostingroutes.route('/insert_item', methods=['POST'])
def insert_item():
    table = g.dynamodb.Table('JobPostings')

    data = request.json

    # Map JSON fields to DynamoDB table fields
    item = {
        'Location': data.get('companyLocation'),
        # Assuming jobPosting is the date in this case
        'DatePosted': data.get('jobPosting'),
        'Title': data.get('jobTitle'),
        'CompanyName': data.get('companyName'),
        # Join description array into a single string
        'Desc': ' '.join(data.get('jobDescription', [])),
        'Link': data.get('jobLink')
    }

    try:
        # Insert item into DynamoDB table
        table.put_item(Item=item)
        return jsonify({'message': 'Item inserted successfully'}), 201
    except ClientError as e:
        return jsonify({'error': str(e)}), 500


@jobpostingroutes.route('/delete_all_items', methods=['DELETE'])
def delete_all_items():
    table = g.dynamodb.Table('JobPostings')

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
