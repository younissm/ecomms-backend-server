from django.urls import path
from . import views
urlpatterns = [
    path('users/create/', views.UserCreateView.as_view(), name='user-create'),
    path('users/me/', views.CurrentUserView.as_view(), name='current-user'),
    path('users/<int:pk>', views.UserDetailView.as_view(), name='user-detail'),
    path('users', views.UserListView.as_view(), name='user-list'),

    path('products/', views.ProductListCreateView.as_view(), name='product-list-create'),

    path('products/<int:pk>/', views.ProductDetailView.as_view(), name='product-detail'),
    path('categories/', views.CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<str:category_title>/', views.CategoryDetailView.as_view()),
    path('reviews/', views.ReviewListCreateView.as_view(), name='review-list-create'),
    path('reviews/<int:pk>', views.ReviewDetailView.as_view(), name='review-detail'),

    path('categories/<str:category_title>/products/', views.CategoryProductListView.as_view(), name='category-products'),

]
