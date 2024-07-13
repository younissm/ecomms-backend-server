from django.urls import path
from . import views


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [

    path('signup/', views.UserCreateView.as_view(), name='user-sign-up'),
    path('me/', views.CurrentUserView.as_view(), name='current-user'),
    path('updateMe/', views.CurrentUserView.as_view(), name='current-user-update'),

    path('<int:pk>/', views.UserDetailView.as_view(), name='user-detail'),
    path('', views.UserListView.as_view(), name='user-list'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
