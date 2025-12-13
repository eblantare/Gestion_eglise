# members/serializers.py - VERSION FONCTIONNELLE
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Member

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'date_joined')
        read_only_fields = ('date_joined',)

class MemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    display_role = serializers.CharField(source='get_role_display', read_only=True)
    
    class Meta:
        model = Member
        fields = '__all__'
        read_only_fields = ('user', 'email', 'created_at', 'updated_at')
    
    def to_representation(self, instance):
        """Surcharge pour gérer les dates"""
        representation = super().to_representation(instance)
        
        # Formater les dates
        date_fields = ['baptism_date', 'membership_date']
        for field in date_fields:
            if field in representation and representation[field]:
                representation[field] = representation[field].split('T')[0] if 'T' in representation[field] else representation[field]
        
        return representation