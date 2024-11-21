# import pg8000
# from decouple import config
# from flask_sqlalchemy import SQLAlchemy

# db = SQLAlchemy()

# def initialize_db(app):
#     db.init_app(app)

# try:
#     connection = pg8000.connect(
#         host=config("DB_HOST"),
#         port=config("DB_PORT"),
#         database=config("DB_NAME"),
#         user=config("DB_USERNAME"),
#         password=config("DB_PASSWORD")
#     )
    
#     print("Connection successful!")

#     # Example query
#     cursor = connection.cursor()
#     cursor.execute("SELECT version();")
#     version = cursor.fetchone()
#     print("PostgreSQL version:", version)

# except Exception as e:
#     print("Error connecting to the database:", e)

# finally:
#     if connection:
#         connection.close()
#         print("Connection closed.")
