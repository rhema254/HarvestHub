from db_connect import db
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
    payment_mode = db.Column(db.String(50))
    card_id = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=db.func.now(), nullable=False)

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
    user = db.relationship('User', backref=db.backref('listings', lazy=True))

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