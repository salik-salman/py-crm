# Generated by Django 3.2.8 on 2021-11-02 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('Emp_id', models.AutoField(primary_key=True, serialize=False)),
                ('Employee_name', models.CharField(max_length=100)),
                ('Employee_email', models.EmailField(blank=True, max_length=100, unique=True)),
                ('Employee_gender', models.CharField(default='M', max_length=1)),
                ('Emp_address', models.CharField(blank=True, max_length=150)),
                ('Emp_city', models.CharField(blank=True, max_length=100)),
                ('Emp_group_id', models.CharField(blank=True, max_length=100)),
                ('Emp_type_id', models.IntegerField(blank=True)),
                ('Emp_is_active', models.IntegerField(blank=True)),
                ('Emp_role', models.CharField(blank=True, max_length=100)),
                ('Created_by', models.CharField(default='Admin', max_length=100)),
                ('Created_on', models.DateTimeField(auto_now_add=True)),
                ('Last_modefied', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
