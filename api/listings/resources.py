from flask import request 
from flask_restx import Resource, Namespace
from ..exts import api
from ..models import Listing
from datetime import datetime, timezone
from ..serializers import listing_serializer


# API Resource for creating a listing
listings_ns = Namespace('listings', description='Listings related operations')

@listings_ns.route('/')
class listingListResource(Resource):

    @listings_ns.doc(
        description= "Get all Listings for a particular client"
    )
    @listings_ns.marshal_list_with(listing_serializer)
    def get(self):
        """ Get all active listings """
        listings = Listing.query.all()
        return  listings, 200

    @listings_ns.doc(
        description= "Get all Listings for a particular client"

    )
    @listings_ns.expect(listing_serializer)
    @listings_ns.marshal_with(listing_serializer)
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


@listings_ns.route('/listings/<int:id>')
class ListingResource(Resource):

    @listings_ns.doc(
        description= "Get a single item on the listing",
        params={ 
            "id":"The ID of the listing"
             
        }
    )
    @listings_ns.marshal_with(listing_serializer)
    def get(self, id):
        """ Get a single listing by ID """
        listing = Listing.query.get_or_404(id)

        return listing

    @listings_ns.doc(
        description= "Update details of a single item on the listing",
        params={ 
            "id":"The ID of the listing"
             
        }
    )
    @listings_ns.marshal_with(listing_serializer)
    @listings_ns.marshal_with(listing_serializer)
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

    @listings_ns.doc(
        description= "Delete a single item on the listing",
        params={ 
            "id":"The ID of the listing"
             
        }
    )
    def delete(self, id):
        """ Delete a listing  """
        listing_to_delete = Listing.query.get_or_404(id)

        listing_to_delete.delete()

        return {"message": "Listing successfully deleted"}, 200
