from flask import Flask, render_template, request
from flask_cors import CORS
from listings.resources import listings_ns
from profiles.buyerprofiles import buyerprofiles_ns
from profiles.sellerprofiles import sellerprofiles_ns
from profiles.wishlist import wishlist_ns
from exts import api, db
# from db_connect import initialize_db, db
from config import DevConfig
from flask_restx import Resource, marshal_with
from models import Listing
from serializers import listing_serializer
from decouple import config



app = Flask(__name__)


app.config.from_object(DevConfig)

app.config['SQLALCHEMY_DATABASE_URI'] = config('DATABASE_URI')
api.init_app(app, version='1.0', title='HarvestHub API Docs', description='A brief description of our APIs.', contact='Rhema')
CORS(app)
db.init_app(app)


#Namespaces
api.add_namespace(listings_ns)
api.add_namespace(buyerprofiles_ns, path='/profiles/buyerprofile')
api.add_namespace(sellerprofiles_ns, path='/profiles/sellerprofile')
api.add_namespace(wishlist_ns, path='/wishlist') 

@api.route('/index', methods=['GET'])   
class TestResource(Resource):      
    
    @marshal_with(listing_serializer)           
    def get(self):
        
        list = Listing.query.all()
        print(app.config('SQLALCHEMY_DATABASE_URI'))

        return list, 200

if __name__ == '__main__':
            
    app.run(debug=True, use_reloader=True)
    
