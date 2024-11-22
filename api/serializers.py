from exts import api
from flask_restx import fields

listing_serializer = api.model(
    'Listing', 
{
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
    'user_id': fields.Integer(required=True, description='The ID of the user who created the listing'),
    'verified': fields.String(default="Pending")
})


buyerprofiles_serializer = api.model('BuyerProfile', {
    'id': fields.Integer(required=True, description='Unique ID of the buyer profile'),
    'user_id': fields.Integer(required=True, description='ID of the user'),
    'address': fields.String(description='Address of the buyer'),
    'postal_code': fields.String(description='Postal code of the buyer'),
    'preferred_currency': fields.String(description='Preferred currency of the buyer'),
    'purchase_history': fields.Raw(description='Purchase history in JSON format'),
    'wishlist': fields.Raw(description='Wishlist in JSON format'),
    'profile_picture': fields.String(description='URL of the profile picture'),
    'created_at': fields.DateTime(description='Timestamp when the profile was created'),
    'updated_at': fields.DateTime(description='Timestamp when the profile was last updated'),
})


sellerprofiles_serializer = api.model(
    'SellerProfile', 
{                                     
    'id': fields.Integer(required=True, description='Unique ID of the seller profile'),
    'user_id': fields.Integer(required=True, description='ID of the user'),
    'is_company': fields.Boolean(description='Indicates if the seller is a company'),
    'company_name': fields.String(description='Name of the company (if applicable)'),
    'company_registration_no': fields.String(description='Company registration number (if applicable)'),
    'tax_id': fields.String(description='Tax ID of the seller'),
    'contact_person_name': fields.String(description='Contact person for the company (if applicable)'),
    'store_name': fields.String(required=True, description='Name of the store'),
    'store_description': fields.String(description='Description of the store'),
    'business_address': fields.String(description='Business address of the seller'),
    'postal_code': fields.String(description='Postal code of the seller'),
    'product_categories': fields.Raw(description='Categories offered by the seller in JSON format'),
    'profile_picture': fields.String(description='URL of the profile picture'),
    'average_rating': fields.Float(description='Average rating of the seller'),
    'verification_status': fields.String(description='Verification status of the seller'),
    'created_at': fields.DateTime(description='Timestamp when the profile was created'),
    'updated_at': fields.DateTime(description='Timestamp when the profile was last updated'),
})


wishlist_serializer = api.model(
    'Wishlist',
{
    'id': fields.Integer(readonly=True, description='The wishlist ID'),
    'user_id': fields.Integer(required=True, description='The user who created the wishlist'),
    'listing_id': fields.Integer(required=True, description='The listing added to the wishlist'),
    'created_at': fields.DateTime(description='The date the wishlist was created')
})