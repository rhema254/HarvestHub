from exts import api
from flask_restx import Resource, Namespace
from models import Listing, User, Wishlist
from serializers import wishlist_serializer
from flask import request 


wishlist_ns = Namespace('wishlists', description='Wishlist operations')


def add_to_wishlist(user_id, listing_id):
    # Check if the user has already wishlisted the product
    existing_wishlist = Wishlist.query.filter_by(user_id=user_id, listing_id=listing_id).first()
    if existing_wishlist:
        return {"message": "Item already in wishlist"}, 400
    else: 
        wishlist_item = Wishlist(user_id=user_id, listing_id=listing_id)
        wishlist_item.save()
    return {"message": "Item added to wishlist"}, 201

def remove_from_wishlist(user_id, listing_id):
    # Find the wishlist entry
    wishlist_entry = Wishlist.query.filter_by(user_id=user_id, listing_id=listing_id).first()
    
    if not wishlist_entry:
        return {"message": "Item not found in wishlist"}, 404
    

    return {"message": "Item removed from wishlist"}, 200


@wishlist_ns.route('/<int:id>')
class WishlistResource(Resource):
    
    @wishlist_ns.marshal_list_with(wishlist_serializer)
    def get(self, user_id):
        """Get all items in a wishlist"""

        wishlist_items = Wishlist.query.filter_by(user_id=user_id).join(Listing).all()

        return wishlist_items

    @wishlist_ns.expect(wishlist_serializer)
    def post(self):
        """Add a listing to the wishlist"""
        data = request.json 
        
        user_id = data['user_id']
        listing_id = data['listing_id']

        return add_to_wishlist(user_id, listing_id)

    def delete(self):
        """ Remove an item from Wishlist """

        data = request.json
        user_id = data['user_id']
        listing_id = data['listing_id']

        return remove_from_wishlist(user_id, listing_id)