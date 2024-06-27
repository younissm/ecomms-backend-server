from django.contrib import admin
from .models import Category, Product
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug']
    prepopulated_fields = {'slug': ('title',)}
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
 'title',
 'slug',
 'price',
 'stock',
 'created',
 'updated'
    ]
    list_filter = ['created', 'updated']
    list_editable = ['price']
    prepopulated_fields = {'slug': ('title',)}