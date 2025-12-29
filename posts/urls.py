from django.urls import path
from .views import PostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'posts', PostViewSet, basename='post')

urlpatterns = [
    # Route spéciale pour les posts publiés
    path('published/', PostViewSet.as_view({'get': 'published'}), name='published-posts'),
] + router.urls