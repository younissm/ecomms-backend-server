# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import authentication, permissions
# from .models import Product

# class ListProducts(APIView):
#     authentication_classes = [authentication.TokenAuthentication]
#     permission_classes = [permissions.IsAdminUser]
    
#     def get(self, request, format=None):
#         products = [user.username for user in Product.objects.all()]


from django.shortcuts import get_object_or_404, render
from .models import Category, Product


def product_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(available=True)
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)
    return render(
    request,
    'store/product/list.html', {
        'category': category,
        'categories': categories,
        'products': products
    }
)
    
    
def product_detail(request, id, slug):
    product = get_object_or_404(
        Product, id=id, slug=slug, available=True
    )
    return render(request, 'store/product/detail.html', {'product': product})