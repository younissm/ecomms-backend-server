from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


import os
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/users/', include('accounts.urls')),
    path('', include('pages.urls')),
    path('store', include('store.urls', namespace='store')),

]



if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)
