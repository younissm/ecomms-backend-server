from django.contrib import admin
from .models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title',)
    list_filter = ('title',)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        'title',
        'price',
        'stock',
        'createdAt',
        'updatedAt'
    ]
    list_filter = ['createdAt', 'updatedAt', 'price',]
    list_editable = ['price']
    search_fields = ['title']
