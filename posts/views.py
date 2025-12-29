# posts/views.py - VERSION FRANÇAISE
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [permissions.AllowAny]
        return [permission() for permission in permission_classes]
    
    def get_queryset(self):
        user = self.request.user
        
        if user.is_authenticated:
            return Post.objects.all()
        
        # CORRECTION : Filtrer avec la valeur française 'publié'
        return Post.objects.filter(status='publié')  # ← Changé ici
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
    
    @action(detail=False, methods=['get'])
    def published(self, request):
        """Retourne uniquement les posts publiés, accessible à tous"""
        published_posts = Post.objects.filter(status='publié').order_by('-published_date')  # ← Changé ici
        serializer = self.get_serializer(published_posts, many=True)
        return Response(serializer.data)