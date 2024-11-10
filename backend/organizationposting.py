from boto3.dynamodb.conditions import Attr
from botocore.exceptions import ClientError
from flask import Blueprint, g, jsonify, request

organizationroutes = Blueprint('organizationroutes', __name__, url_prefix='/Organizations')


@organizationroutes.route('/get_item_by_location', methods=['GET'])
def get_item_by_location():
    table = g.dynamodb.Table('Organizations')

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


@organizationroutes.route('/insert_item', methods=['POST'])
def insert_item():
    table = g.dynamodb.Table('Organizations')

    data = request.json

    # Map JSON fields to DynamoDB table fields
    item = {
        'Location': data.get('location'),  # Retrieves the location of the organization.
        'Name': data.get('name'),  # Retrieves the name of the organization.
        'Description': data.get('description'),  # Retrieves the main description text.
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


@organizationroutes.route('/delete_all_items', methods=['DELETE'])
def delete_all_items():
    table = g.dynamodb.Table('Organization')

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
