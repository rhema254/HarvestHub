from flask_restx import Resource, Namespace
from models import SellerProfile
from serializers import sellerprofiles_serializer
from flask import request


sellerprofiles_ns = Namespace('sellerprofiles', description='SellerProfile Related Operations')

@sellerprofiles_ns.route('/')
class SellerProfilesResources(Resource):
    
    @sellerprofiles_ns.marshal_list_with(sellerprofiles_serializer)
    def get(self):
        """ Get all sellers """

        sellers =  SellerProfile.query.filter_by()
        return sellers

    @sellerprofiles_ns.expect(sellerprofiles_serializer)
    @sellerprofiles_ns.marshal_with(sellerprofiles_serializer)
    def post(self):
        """ Add a new seller """

        data = request.get_json()

        new_seller = SellerProfile(
            user_id=data["user_id"],
            is_company=data.get("is_company"),
            company_name=data.get("company_name"),
            company_registration_no=data.get("company_registration_no"),
            tax_id=data.get("tax_id"),
            contact_person_name=data.get("contact_person_name"),
            store_name=data["store_name"],
            store_description=data.get("store_description"),
            business_address=data.get("business_address"),
            postal_code=data.get("postal_code"),
            product_categories=data.get("product_categories", []),
            profile_picture=data.get("profile_picture"),
        )
        
        new_seller.save()
        # Send confirmation email

        return new_seller, 201

@sellerprofiles_ns.route('/<int:id>')
class SellerProfileResource(Resource):

    @sellerprofiles_ns.marshal_with(sellerprofiles_serializer)
    def get(self, id):
        """ Get a seller's profile by ID """

        seller = SellerProfile.query.get_or_404(id)
        return seller

    @sellerprofiles_ns.expect(sellerprofiles_serializer)
    @sellerprofiles_ns.marshal_with(sellerprofiles_serializer)
    def put(self, id):
        """ To update a single profile """

        profile_to_update = SellerProfile.query.get_or_404(id)

        data = request.get_json()

        for key, value in data.items():
            if hasattr(profile_to_update, key):
                setattr(profile_to_update, key, value)

        profile_to_update.update()
            
        return profile_to_update, 203

    def delete(self, id):
        """ Delete a Seller's profile """
        profile_to_delete = SellerProfile.query.get_or_404(id)

        profile_to_delete.delete()

        return {"message": "Listing successfully deleted"}, 200

