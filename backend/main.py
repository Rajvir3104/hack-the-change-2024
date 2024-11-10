import os

import boto3
from boto3.dynamodb.conditions import Attr
from botocore.exceptions import ClientError
from dotenv import load_dotenv
from flask import Flask, jsonify, request

load_dotenv()

app = Flask(__name__)

AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
REGION_NAME = os.getenv('REGION_NAME')

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


if __name__ == '__main__':
    app.run(debug=True)
