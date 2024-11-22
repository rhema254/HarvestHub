from flask import Flask
from flask_cors import CORS
from .listings.resources import listings_ns
from .profiles.buyerprofiles import buyerprofiles_ns
from .profiles.sellerprofiles import sellerprofiles_ns
from .profiles.wishlist import wishlist_ns
from .exts import api, db
# from db_connect import initialize_db, db
from .config import DevConfig
from decouple import config


def create_app():

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

    return app

