# Generated by Django 3.2.11 on 2022-01-27 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_remove_category_f_nullbool'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='f_decimal',
            field=models.DecimalField(decimal_places=2, default=0, help_text='Lorem ipsum <b>dolor</b> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua', max_digits=16, verbose_name='decimal'),
        ),
    ]
