#accounts/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models


from django.utils import timezone


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/users/<pk>/<filename>
    return 'userprofile/{0}/{1}'.format(instance.pk, filename)

class CustomUser(AbstractUser):
    name = models.CharField(max_length=255, unique=False, blank=True, null=True)
    email = models.EmailField(unique=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(
        upload_to=user_directory_path,
        blank=True
    )

    updatedAt = models.DateTimeField(auto_now=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']




