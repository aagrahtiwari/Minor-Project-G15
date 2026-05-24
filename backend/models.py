from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Property(Base):
    __tablename__ = "properties"
    id = Column(Integer, primary_key=True, index=True)
    house_number = Column(String, index=True)
    owner_name = Column(String)
    area_zone = Column(String, index=True)
    permitted_floors = Column(Integer)
    is_registered = Column(Boolean, default=True)

class SurveyRecord(Base):
    __tablename__ = "survey_records"
    id = Column(Integer, primary_key=True, index=True)
    image_url = Column(String)
    analysis_date = Column(DateTime, default=datetime.utcnow)
    is_authorized = Column(Boolean)
    confidence_score = Column(Float)
    detected_floors = Column(Integer, nullable=True)
    area_zone = Column(String, index=True)
    
class Case(Base):
    __tablename__ = "cases"
    id = Column(Integer, primary_key=True, index=True)
    survey_id = Column(Integer, ForeignKey("survey_records.id"), nullable=True)
    house_number = Column(String)
    owner_name = Column(String, nullable=True)
    area_zone = Column(String)
    date_of_inspection = Column(DateTime, default=datetime.utcnow)
    assigned_inspector = Column(String)
    status = Column(String, default="Open") # Open, Under Review, Notice Issued, Closed
    remarks = Column(Text, nullable=True)
    property_image = Column(String, nullable=True)
    
    survey = relationship("SurveyRecord")
