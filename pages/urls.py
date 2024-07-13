from django.urls import path, re_path
from .views import home


urlpatterns = [
    path("", home, name="home"),
    # path("dashboard/", home, name="dashboard"),
    # path("dashboard/products/", home, name="dashboard-products"),
    re_path(r'^products/*', home, name="home"),

    re_path(r'^.*', home, name="home"),
]