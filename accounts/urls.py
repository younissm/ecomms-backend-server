from django.urls import path
from .views import (
    UserListView, 
    UserDetailView, 
    UserUpdateView, 
    UserDeleteView, 
    CurrentUserView, 
    UserCreateView
)

urlpatterns = [
    path('create/', UserCreateView.as_view(), name='user-create'),
    path('me/', CurrentUserView.as_view(), name='current-user'),  
    path('<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('<int:pk>/update/', UserUpdateView.as_view(), name='user-update'),
    path('<int:pk>/delete/', UserDeleteView.as_view(), name='user-delete'),
    path('', UserListView.as_view(), name='user-list'),

]
