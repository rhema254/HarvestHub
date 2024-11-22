from .exts import db
import datetime
from enum import Enum

class User(db.Model):
    """ The data attributes for each user record """
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    f_name = db.Column(db.String(100), nullable=False)
    l_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    phone_number = db.Column(db.String(20), unique=True)
    country = db.Column(db.String(100))
    city = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
   
   
    buyerprofile = db.relationship('BuyerProfile', back_populates='user')
    sellerprofile = db.relationship('SellerProfile', back_populates='user', uselist=False)
    listing = db.relationship('Listing', back_populates='user')
    wishlist = db.relationship('Wishlist', back_populates='user')

    def __repr__(self):
        return f"<User {self.f_name} {self.l_name} ({self.email})>"

      # Convenience Methods
    def save(self):
        """ Add the user to the session and commit the transaction. """
        db.session.add(self)
        db.session.commit()

    def delete(self):
        """ Delete the user from the session and commit the transaction. """
        db.session.delete(self)
        db.session.commit()

    def update(self, **kwargs):
        """ Update user attributes with the provided keyword arguments. """
        for key, value in kwargs.items():
            setattr(self, key, value)
        self.save()


class Message(db.Model):
    """ The data attributes for each message record """
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    recipient_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    sent_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    status = db.Column(db.String(10), nullable=False)
    is_deleted = db.Column(db.Boolean, default=False)

    sender = db.relationship('User', foreign_keys=[sender_id])
    recipient = db.relationship('User', foreign_keys=[recipient_id])

    def __repr__(self):
        return f"<Message from {self.sender.f_name} to {self.recipient.f_name} at {self.sent_at}>"

    #Convenience Methods
    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def archive(self):
        """ Mark the message as deleted (soft delete). """
        self.is_deleted = True
        db.session.commit()

    def update(self, **kwargs):
        """ Update message attributes with the provided keyword arguments. """
        for key, value in kwargs.items():
            setattr(self, key, value)
        self.save()



class ApprovalStatus(Enum):
       Pending =  "Pending"
       Approved = "Approved"
       Rejected = "Rejected"

class Listing(db.Model):
    __tablename__ = 'listings'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    location = db.Column(db.String(255), nullable=False)
    brand = db.Column(db.String(100), nullable=False)
    model = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String(255), nullable=True)  # URL to the image of the tractor
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    verified = db.Column(db.String(9),  default=ApprovalStatus.Pending)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Link to user
    
    user = db.relationship('User', back_populates='listing')

    def __repr__(self):
        return f"<Listing {self.title} ({self.brand} {self.model})>"
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)
        self.save() 



class BuyerProfile(db.Model):
    __tablename__ = 'buyerprofiles'

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.Text)
    postal_code = db.Column(db.String(20))
    preferred_currency = db.Column(db.String(10))
    profile_picture = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Link to user
    
    user = db.relationship('User', back_populates='buyerprofile')

    def __repr__(self):
        return f" Buyer {self.id} from {self.user.country} "

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)
        self.save() 


class SellerProfile(db.Model):
    __tablename__ = 'sellerprofiles'

    id = db.Column(db.Integer, primary_key=True)
    is_company = db.Column(db.Boolean, default=False)  # Indicates if the seller is a company
    company_name = db.Column(db.String(255))  # Nullable for individual sellers
    company_registration_no = db.Column(db.String(50))  # Nullable for individual sellers
    tax_id = db.Column(db.String(50))  # Nullable for individual sellers
    contact_person_name = db.Column(db.String(100))  # Nullable for individual sellers
    store_name = db.Column(db.String(255), nullable=False)  # Store name
    store_description = db.Column(db.Text)
    business_address = db.Column(db.Text)
    postal_code = db.Column(db.String(20))
    product_categories = db.Column(db.JSON, default='[]')  # Categories offered by the seller
    profile_picture = db.Column(db.String(255))
    average_rating = db.Column(db.Float, default=0.0)  # Average customer rating
    verification_status = db.Column(db.String(9),  default=ApprovalStatus.Pending)  # Verification status (e.g., Pending, Verified)
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now()) 
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Link to user

    user = db.relationship('User', back_populates='sellerprofile')

    def __repr__(self):
        return f"<Seller {self.id} from {self.user.country} {self.company_name}"

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)
        self.save() 




class Wishlist(db.Model):
    __tablename__ = 'wishlists'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Reference to user
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)  # Reference to listing
    created_at = db.Column(db.DateTime, default=db.func.now())

    # Relationships
    user = db.relationship('User', back_populates='wishlist')
    

    # Enforce uniqueness at the database level
    __table_args__ = (
        db.UniqueConstraint('user_id', 'listing_id', name='unique_user_listing'),
    )

    def __repr__(self):
        return f"<Wishlist User: {self.user_id}, Listing: {self.listing_id}>"
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()