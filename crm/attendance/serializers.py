from django.db.models import fields
from rest_framework import serializers
from attendance.models import Employees


class AttendanceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'
