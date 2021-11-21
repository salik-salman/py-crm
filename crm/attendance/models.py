from django.db import models

# Create your models here.
class Employees(models.Model):
    Emp_id = models.AutoField(primary_key=True)
    Employee_name = models.CharField(max_length=100)
    Employee_email = models.EmailField(max_length=100,blank=True,unique=True)
    Employee_gender = models.CharField(max_length=1, default='M')
    Emp_address = models.CharField(max_length=150, blank=True)
    Emp_city = models.CharField(max_length=100, blank=True)
    Emp_group_id = models.CharField(max_length=100, blank=True)
    Emp_type_id = models.IntegerField(blank=True)
    Emp_is_active = models.IntegerField(blank=True)
    Emp_role = models.CharField(max_length=100, blank=True)
    Created_by = models.CharField(max_length=100 ,default='Admin')
    Created_on = models.DateTimeField(auto_now_add=True)
    Last_modefied = models.DateTimeField(auto_now_add=True)