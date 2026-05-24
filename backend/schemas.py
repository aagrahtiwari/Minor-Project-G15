from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class PropertyBase(BaseModel):
    house_number: str
    owner_name: str
    area_zone: str
    permitted_floors: int
    is_registered: bool = True

class PropertyCreate(PropertyBase):
    pass

class PropertyOut(PropertyBase):
    id: int
    class Config:
        from_attributes = True


class SurveyRecordBase(BaseModel):
    image_url: str
    is_authorized: bool
    confidence_score: float
    detected_floors: Optional[int] = None
    area_zone: str

class SurveyRecordCreate(SurveyRecordBase):
    pass

class SurveyRecordOut(SurveyRecordBase):
    id: int
    analysis_date: datetime
    class Config:
        from_attributes = True


class CaseBase(BaseModel):
    house_number: str
    owner_name: Optional[str] = None
    area_zone: str
    assigned_inspector: str
    status: str = "Open"
    remarks: Optional[str] = None
    property_image: Optional[str] = None

class CaseCreate(CaseBase):
    survey_id: Optional[int] = None

class CaseOut(CaseBase):
    id: int
    survey_id: Optional[int]
    date_of_inspection: datetime
    class Config:
        from_attributes = True

class ZoneAnalysis(BaseModel):
    area_zone: str
    authorized_count: int
    unauthorized_count: int
