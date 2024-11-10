from boto3.dynamodb.conditions import Attr
from botocore.exceptions import ClientError
from flask import Blueprint, g, jsonify, request

eventpostingroutes = Blueprint('eventpostingroutes', __name__)


@eventpostingroutes.route('/get_item_by_location', methods=['GET'])
def get_item_by_location():
    table = g.dynamodb.Table('Events')

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


@eventpostingroutes.route('/insert_item', methods=['POST'])
def insert_item():
    table = g.dynamodb.Table('Events')

    data = request.json

    # Map JSON fields to DynamoDB table fields
    item = {
        'Location': data.get('location'),
        # Assuming jobPosting is the date in this case
        'Name': data.get('name'),
        'Description': data.get('details'),
        'Phone': data.get('contact', {}).get('phone'),  # Accesses the phone number within the nested contact field.
        'Email': data.get('contact', {}).get('email'),  # Accesses the email within the nested contact field.
        'Website': data.get('contact', {}).get('website')  # Accesses the website within the nested contact field.
    }

    try:
        # Insert item into DynamoDB table
        table.put_item(Item=item)
        return jsonify({'message': 'Item inserted successfully'}), 201
    except ClientError as e:
        return jsonify({'error': str(e)}), 500


@eventpostingroutes.route('/delete_all_items', methods=['DELETE'])
def delete_all_items():
    table = g.dynamodb.Table('Events')

    try:
        # Scan to get all items (scan is required to retrieve all items for deletion)
        response = table.scan()
        items = response.get('Items', [])

        # Delete each item individually
        for item in items:
            table.delete_item(
                Key={
                    'Location': item['Location'],
                }
            )
        return jsonify({'message': 'All items deleted successfully'}), 200
    except ClientError as e:
        return jsonify({'error': str(e)}), 500
