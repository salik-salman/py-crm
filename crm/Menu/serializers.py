from django.db.models import fields
from rest_framework import serializers
from Menu.models import Menu


class MenuSerializers(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'
