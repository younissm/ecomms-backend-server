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
    category = CategorySerializer()  # Nested serializer for Category

    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'price', 'category', 'thumbnail', 'createdAt', 'updatedAt']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'name', 'createdAt', 'updatedAt', 'image')

    def validate(self, attrs):
        # if attrs['password'] != attrs['password_confirm']:
        #     raise serializers.ValidationError({"password": "Password fields didn't match."})
        email = attrs.get('email')

        if email:
            try:
                validate_email(email)
            except ValidationError:
                raise serializers.ValidationError({"email": "Invalid email address."})
            attrs['email'] = email.lower()  # Convert email to lowercase

        password = attrs.get('password')
        if password and len(password) < 8:
            raise serializers.ValidationError({"password": "Password must be at least 8 characters long."})

        return attrs

    def create(self, validated_data):
        # validated_data.pop('password_confirm')
        user = User.objects.create(
            email=validated_data['email'],
            name=validated_data['name'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        for key, value in validated_data.items():
            if key == 'password':
                instance.set_password(value)
            else:
                setattr(instance, key, value)
        instance.save()
        return instance

