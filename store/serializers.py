from store.models import Product, Category, Review
from django.contrib.auth import get_user_model

from rest_framework import serializers
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

User = get_user_model()


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'thumbnail']


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'price', 'category', 'thumbnail', 'createdAt', 'updatedAt']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


