# products/models.py
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Price field
    image = models.ImageField(upload_to='products/')  # Example for an image field

    def __str__(self):
        return self.name
