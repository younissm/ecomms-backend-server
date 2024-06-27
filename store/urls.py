#store/urls.py
from django.urls import path
from .views import ProductListCreateView, ProductDetailView, CategoryListCreateView, CategoryDetail

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<int:pk>', CategoryDetail.as_view(), name='category-detail'),


]
