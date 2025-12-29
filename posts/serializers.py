# posts/serializers.py - CRÉEZ CE FICHIER
from rest_framework import serializers
from .models import Post
from django.contrib.auth.models import User

class PostSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.get_full_name', read_only=True)
    author_username = serializers.CharField(source='author.username', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    
    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ('author', 'views', 'created_at', 'updated_at', 'slug')
    
    def create(self, validated_data):
        # Associer l'utilisateur connecté comme auteur
        validated_data['author'] = self.context['request'].user
        return super().create(validated_data)