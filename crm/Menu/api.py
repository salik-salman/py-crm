from Menu.models import Menu
from rest_framework import serializers, viewsets, permissions
from .serializers import MenuSerializers


class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all().order_by('-Parent_id')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = MenuSerializers
