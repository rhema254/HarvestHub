from flask import Flask, render_template, request
from flask_cors import CORS
from flask_restx import Resource, Api, fields 
from api.listings import resources
from exts import  db, api

from config import DevConfig

app = Flask(__name__)

db.init_app(app)
app.config.from_object(DevConfig)
api.init_app(app, doc='/docs', version='1.0', title='HarvestHub API Docs', description='A brief description of our APIs.', contact='Rhema')





if __name__ == '__main__':
    app.run(
        debug = True
    )

