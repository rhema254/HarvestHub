from app import api, fields


listing_serializer = api.model('Listing', {
    'id': fields.Integer(readonly=True, description='The unique identifier of a listing'),
    'title': fields.String(required=True, description='The title of the listing'),
    'description': fields.String(required=True, description='A description of the listing'),
    'price': fields.Float(required=True, description='The price of the listing'),
    'location': fields.String(required=True, description='The location of the item'),
    'brand': fields.String(required=True, description='The brand of the item'),
    'model': fields.String(required=True, description='The model of the item'),
    'year': fields.Integer(required=True, description='The year of the item'),
    'image_url': fields.String(required=False, description='URL to the image of the item'),
    'created_at': fields.DateTime(description='The date and time when the listing was created'),
    'updated_at': fields.DateTime(description='The date and time when the listing was last updated'),
    'user_id': fields.Integer(required=True, description='The ID of the user who created the listing')
})

