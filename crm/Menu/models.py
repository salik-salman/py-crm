from django.db import models

# Create your models here.


class Menu(models.Model):
    Menu_id = models.AutoField(primary_key=True)
    Menu_name = models.CharField(max_length=100)
    Menu_href = models.CharField(max_length=100)
    Menu_is_active = models.CharField(max_length=100)
    Menu_order = models.CharField(max_length=100, blank=True)
    Menu_type = models.CharField(max_length=100, default='single')
    Menu_icon = models.CharField(max_length=100, default='fa-circle')
    Parent_id = models.CharField(max_length=100, default=0)
    Created_by = models.CharField(max_length=100, default='Admin')
    Created_on = models.DateTimeField(auto_now_add=True)
    Last_modefied = models.DateTimeField(auto_now_add=True)
