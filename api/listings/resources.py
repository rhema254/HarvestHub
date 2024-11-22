from flask import request 
from flask_restx import Resource, Namespace
from exts import api
from models import Listing
from datetime import datetime, timezone
from serializers import listing_serializer


# API Resource for creating a listing
listings_ns = Namespace('listings', description='Listings related operations')

@listings_ns.route('/')
class listingListResource(Resource):

    @api.marshal_list_with(listing_serializer)
    def get(self):
        """ Get all active listings """
        listings = Listing.query.all()
        return  listings, 200

    def post(self):
            """Create a new listing."""
            data = request.get_json()

            new_listing = Listing(
                title=data.get('title'),
                description=data.get('description'),
                price=data.get('price'),
                location=data.get('location'),
                brand=data.get('brand'),
                model=data.get('model'),
                year=data.get('year'),  
                image_url=data.get('image_url'),
                created_at=datetime.now(timezone.utc),
                updated_at=datetime.now(timezone.utc),
                user_id=data.get('user_id')  # Assuming user_id is passed in the request
            )

            new_listing.save()  # Save the new listing to the database

            return new_listing, 201  # Return the created listing with 201 status


# API Resource for fetching a single listing
@api.route('/<int:id>')
class ListingResource(Resource):


    @api.marshal_with(listing_serializer)
    def get(self, id):
        """ Get a single listing by ID """
        listing = Listing.query.get_or_404(id)

        return listing

    @api.marshal_with(listing_serializer)
    @api.marshal_with(listing_serializer)
    def put(self, id):
        """Update a listing."""
        # Retrieve the listing or return 404 if not found
        listing_to_update = Listing.query.get_or_404(id)

        data = request.get_json()

        for key, value in data.items():
            if hasattr(listing_to_update, key):
                setattr(listing_to_update, key, value)

        listing_to_update.update()

        return listing_to_update  # Return the updated listing

    def delete(self, id):
        """ Soft delete a listing (mark as deleted) """
        listing_to_delete = Listing.query.get_or_404(id)

        listing_to_delete.is_deleted = True
        listing_to_delete.delete()

        return {"message": "Listing successfully deleted"}, 200
