from flask_restx import Resource, Namespace
from ..models import BuyerProfile
from ..serializers import buyerprofiles_serializer
from flask import request


buyerprofiles_ns = Namespace('buyerprofiles', description='BuyerProfile Related Operations')

@buyerprofiles_ns.route('/')
class BuyerProfilesResources(Resource):
    
    @buyerprofiles_ns.marshal_list_with(buyerprofiles_serializer)
    def get(self):
        """ Get all buyers """

        buyers =  BuyerProfile.query.all()
        return buyers

    @buyerprofiles_ns.expect(buyerprofiles_serializer)
    @buyerprofiles_ns.marshal_with(buyerprofiles_serializer)
    def post(self):
        """ Add a new buyer """

        data = request.get_json()

        new_buyer = BuyerProfile(
            user_id=data['user_id'],
            address=data.get('address'),
            postal_code=data.get('postal_code'),
            preferred_currency=data.get('preferred_currency'),
            purchase_history=data.get('purchase_history', []),
            wishlist=data.get('wishlist', []),
            profile_picture=data.get('profile_picture')
        )
        
        new_buyer.save()
        # Send confirmation email

        return new_buyer, 201

@buyerprofiles_ns.route('/<int:id>')
class BuyerProfileResource(Resource):

    @buyerprofiles_ns.marshal_with(buyerprofiles_serializer)
    def get(self, id):
        """ Get a Buyer's profile by ID """

        buyer = BuyerProfile.query.get_or_404(id)
        return buyer

    @buyerprofiles_ns.expect(buyerprofiles_serializer)
    @buyerprofiles_ns.marshal_with(buyerprofiles_serializer)
    def put(self, id):
        """ To update a single profile """

        profile_to_update = BuyerProfile.query.get_or_404(id)

        data = request.get_json()

        for key, value in data.items():
            if hasattr(profile_to_update, key):
                setattr(profile_to_update, key, value)

        profile_to_update.update()
            
        return profile_to_update, 203

    def delete(self, id):
        """ Soft delete a listing (mark as deleted) """
        profile_to_delete = BuyerProfile.query.get_or_404(id)

        profile_to_delete.delete()

        return {"message": "Listing successfully deleted"}, 200

