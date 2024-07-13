from django.contrib import admin
from .models import Category, Product, Review


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'thumbnail')
    search_fields = ('title',)
    list_filter = ('title',)


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'rating', 'comment', 'created_at')
    search_fields = ('user', 'product')
    list_filter = ('rating', 'created_at')


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        'title',
        'price',
        'description',
        'category',
        'thumbnail',
        'discountPercentage',
        'stock',
        'createdAt',
        'ratingsAverage',
        'updatedAt',
    ]
    list_filter = ['createdAt', 'updatedAt', 'price', ]
    list_editable = ['price']
    search_fields = ['title']

