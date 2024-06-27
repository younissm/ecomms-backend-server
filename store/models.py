#models.py
from django.db import models
from django.urls import reverse
# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    class Meta:
        ordering = ['title']
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('store:category-detail', args=[self.id])




class Product(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    stock = models.IntegerField(default=1)
    category = models.ForeignKey(
        Category,
        related_name='products',
        on_delete=models.CASCADE
    )
    slug = models.SlugField(max_length=200)
    image = models.ImageField(
        upload_to='products/%Y/%m/%d',
        blank=True
    )

    class Meta:
        ordering = ['title']

    def get_absolute_url(self):
        return reverse('store:product-detail', args=[self.id, self.slug])