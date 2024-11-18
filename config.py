from decouple import config

class Config():
    SQLALCHEMY_ECHO = True
    SECRET_KEY = config('SECRET_KEY')
    
    
    
class DevConfig(Config):
    DB_HOST = config('DB_HOST')
    DB_USERNAME = config('DB_USERNAME')
    DB_PASSWORD = config('DB_PASSWORD')
    DB_NAME = config('DB_NAME')
    SQLALCHEMY_DATABASE_URI = config('DB_CONNECTION_STRING')
    DB_PORT = config('DB_PORT')
    SQLALCHEMY_TRACK_MODIFICATIONS = True

class TestConfig(Config):
    pass

class ProdConfig(Config):
    pass 

 