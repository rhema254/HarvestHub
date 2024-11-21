from flask_restx import Resource, Namespace
from exts import api
from models import BuyerProfile
from datetime import datetime, timezone
from serializers import listing_serializer


buyerprofiles_ns = Namespace('buyerprofiles', description='BuyerProfile Related Operations')

@buyerprofiles_ns.route('/')
class BuyerProfileResource(Resource):
    pass