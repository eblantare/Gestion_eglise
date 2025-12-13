# members/permissions.py
from rest_framework import permissions

class IsWebmaster(permissions.BasePermission):
    """Permission seulement pour les webmasters"""
    def has_permission(self, request, view):
        return request.user.is_authenticated and hasattr(request.user, 'member') and request.user.member.role == 'WEBMASTER'

class IsAdminOrWebmaster(permissions.BasePermission):
    """Permission pour admins et webmasters"""
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        if hasattr(request.user, 'member'):
            role = request.user.member.role
            return role in ['ADMIN', 'WEBMASTER']
        return False