#store/views.py

from django.shortcuts import render, get_object_or_404
from .models import Product, Category
from rest_framework import generics
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.permissions import AllowAny



class ProductListCreateView(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        queryset = Product.objects.all()
        category_id = self.request.query_params.get('category_id')
        print(f"Received category_id: {category_id}")  # Debugging line
        if category_id:
            queryset = queryset.filter(category_id=category_id)
            print(f"Filtered queryset: {queryset}")  # Debugging line
        return queryset

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryListCreateView(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        queryset = Product.objects.all()
        category_id = self.request.query_params.get('category_id')
        print(f"Received category_id: {category_id}")  # Debugging line
        if category_id:
            queryset = queryset.filter(product__category=category_id)
            print(f"Filtered queryset: {queryset}")  # Debugging line
        return queryset


    


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = CategorySerializer
