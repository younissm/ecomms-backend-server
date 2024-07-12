from urllib import request


from rest_framework.renderers import JSONRenderer
from django.http import Http404

from django.contrib.auth import get_user_model
from django.core.exceptions import PermissionDenied
from store.models import Category, Product, Review
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, SAFE_METHODS
from rest_framework.views import APIView
from .serializers import UserSerializer, ProductSerializer, CategorySerializer, ReviewSerializer
from django.shortcuts import get_object_or_404

User = get_user_model()


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class CategoryProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]




    def get(self, request, *args, **kwargs):
        category_title = self.kwargs['category_title']
        category = get_object_or_404(Category, title=category_title)
        products = Product.objects.filter(category=category)
        serializer = self.get_serializer(products, many=True)
        return Response({
            "data": {
                "products": serializer.data
            }
        })

class UserListView(APIView):
    permission_classes = [AllowAny]  # This is for debug purposes

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserDetailView(APIView):
    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Response.Http404

    permission_classes = [AllowAny]  # This is for debug purposes

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        user = UserSerializer(user)
        return Response(user.data)

    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserSerializer(user, data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        user = self.get_object(pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        serializer = UserSerializer(request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        request.user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProductListCreateView(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset)
        json = JSONRenderer().render(serializer.data)
        print(json)
        return Response({
            "data": {
                    "product": serializer.data
            }
        }
    )




class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def getProductByCategory(request, category_title):
    products = Product.objects.filter(category__title=category_title)
    if products:
        print(products)
        serializer = CategorySerializer(products, many=True)
        return Response(serializer.data)
    else:
        return Response(status.HTTP_204_NO_CONTENT)


class CategoryListCreateView(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    queryset = Category.objects.all()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            "data": {
                    "categories": serializer.data
            }
        }
    )


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


    def put(request, pk):
        instance = Category.objects.get(pk=pk)
        serializer = CategorySerializer(instance)
        if serializer.is_valid():
            serializer.save()
            return isValid
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReviewListCreateView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = Review.objects.all().select_related('product')
        product_id = self.request.query_params.get('product_id')
        if product_id:
            queryset = queryset.filter(product__id=product_id)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

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
