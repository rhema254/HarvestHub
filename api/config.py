from decouple import config

class Config():
    SQLALCHEMY_ECHO = True
    SECRET_KEY = config('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS', cast = bool)
    
class DevConfig(Config):
    FLASK_ENV = config('FLASK_ENV')
    
    DB_HOST = config('DB_HOST')
    DB_USERNAME = config('DB_USERNAME')
    DB_PASSWORD = config('DB_PASSWORD')
    DB_NAME = config('DB_NAME')
    SQLALCHEMY_DATABASE_URI = config('SQLALCHEMY_DATABASE_URI')
    DB_PORT = config('DB_PORT')
    
    
    AWS_ACCESS_KEY_ID=config('AWS_ACCESS_KEY_ID')
    AWS_SECRET_ACCESS_KEY = config('AWS_SECRET_ACCESS_KEY')
    AWS_DEFAULT_REGION=config('AWS_DEFAULT_REGION')




class TestConfig(Config):
    pass

class ProdConfig(Config):
    pass 

 