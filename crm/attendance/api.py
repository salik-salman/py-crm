from attendance.models import Employees
from rest_framework import serializers, viewsets, permissions
from .serializers import AttendanceSerializers


class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Employees.objects.all()
    permissions_classes =[
        permissions.AllowAny
    ]
    serializer_class = AttendanceSerializers