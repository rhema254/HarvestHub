from flask import Flask, render_template, request
from flask_cors import CORS
from api.listings import resources
from exts import api
from db_connect import initialize_db, db
from config import DevConfig

app = Flask(__name__)

app.config.from_object(DevConfig)
api.init_app(app, doc='/docs', version='1.0', title='HarvestHub API Docs', description='A brief description of our APIs.', contact='Rhema')
initialize_db(app)
CORS(app)



    

if __name__ == '__main__':
            
    app.run(
        debug=True
    )
    
