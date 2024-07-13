# #store/views.py
#
# from django.shortcuts import render, get_object_or_404
# from .models import Product, Category, Review
# from rest_framework import generics
# from .serializers import ProductSerializer, CategorySerializer, ReviewSerializer
# from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly, SAFE_METHODS, IsAuthenticated
#
#
#
# class ProductListCreateView(generics.ListCreateAPIView):
#     permission_classes = [AllowAny]
#     serializer_class = ProductSerializer
#
#     def get_queryset(self):
#         queryset = Product.objects.all()
#         category_id = self.request.query_params.get('category_id')
#         if category_id:
#             queryset = queryset.filter(category_id=category_id)
#         return queryset
#
# class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = [AllowAny]
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#
#
# class CategoryListCreateView(generics.ListCreateAPIView):
#     serializer_class = CategorySerializer
#     permission_classes = [AllowAny]
#     def get_queryset(self):
#         queryset = Product.objects.all()
#         category_id = self.request.query_params.get('category_id')
#         if category_id:
#             queryset = queryset.filter(product__category=category_id)
#         return queryset
#
#
# class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = [AllowAny]
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#
# class ReviewListCreateView(generics.ListCreateAPIView):
#     serializer_class = ReviewSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly]
#
#     def get_queryset(self):
#         queryset = Review.objects.all().select_related('product')
#         product_id = self.request.query_params.get('product_id')
#         if product_id:
#             queryset = queryset.filter(product__id=product_id)
#         return queryset
#
#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)
#
# class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = ReviewSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly]
#
#     def get_permissions(self):
#         if self.request.method in permissions.SAFE_METHODS:
#             return [permissions.AllowAny()]
#         return [IsAuthenticated()]
#
#     def perform_update(self, serializer):
#         if serializer.instance.user != self.request.user:
#             raise PermissionDenied("You do not have permission to edit this review.")
#         serializer.save()
#
#     def perform_destroy(self, instance):
#         if instance.user != self.request.user:
#             raise PermissionDenied("You do not have permission to delete this review.")
#         instance.delete()

from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from .serializers import ProductSerializer, CategorySerializer, ReviewSerializer
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly, SAFE_METHODS, IsAuthenticated
from models import Product, Category, Review
# Product views
class ProductListCreateView(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def getProductByCategory(request, pk):
    products = Product.objects.filter(category=pk)
    if products:
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_204_NO_CONTENT)

class CategoryProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        category_title = self.kwargs['category_title']
        category = get_object_or_404(Category, title=category_title)
        return Product.objects.filter(category=category)

# Category views
class CategoryListCreateView(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    queryset = Category.objects.all()

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Review views
class ReviewListCreateView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        product_id = self.kwargs.get('product_id')
        return Review.objects.filter(product__id=product_id)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Review.objects.all()

    def get_permissions(self):
        if self.request.method in SAFE_METHODS:
            return [AllowAny()]
        return [IsAuthenticated()]

    def perform_update(self, serializer):
        if serializer.instance.user != self.request.user:
            raise PermissionDenied("You do not have permission to edit this review.")
        serializer.save()

    def perform_destroy(self, instance):
        if instance.user != self.request.user:
            raise PermissionDenied("You do not have permission to delete this review.")
        instance.delete()
