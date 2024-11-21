from flask import Flask, render_template, request
from flask_cors import CORS
from api.listings.resources import listings_ns
from api.profiles.buyerprofiles import buyerprofiles_ns
from api.profiles.sellerprofiles import sellerprofiles_ns
from exts import api, db
# from db_connect import initialize_db, db
from config import DevConfig


app = Flask(__name__)

app.config.from_object(DevConfig)
api.init_app(app, doc='/docs', version='1.0', title='HarvestHub API Docs', description='A brief description of our APIs.', contact='Rhema')
db.init_app(app)
CORS(app)

#Namespaces
api.add_namespace(listings_ns, path='/api/listings')
api.add_namespace(buyerprofiles_ns, path='/api/profiles/buyerprofile')
api.add_namespace(sellerprofiles_ns, path='/api/profiles/sellerprofile')


if __name__ == '__main__':
            
    app.run(
        debug=True
    )
    
