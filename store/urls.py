# store/urls.py

from django.urls import path
from . import views

urlpatterns = [

    path('products/', views.ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', views.ProductDetailView.as_view(), name='product-detail'),


    path('categories/', views.CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<str:category_title>/', views.CategoryDetailView.as_view()),
    path('categories/<int:pk>/products/', views.getProductByCategory, name='category-products'),

    path('reviews/', views.ReviewListCreateView.as_view(), name='review-list-create'),
    path('reviews/<int:pk>', views.ReviewDetailView.as_view(), name='review-detail'),

]