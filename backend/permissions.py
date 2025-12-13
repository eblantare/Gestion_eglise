# backend/permissions.py
from rest_framework import permissions

class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Permission personnalisée pour n'autoriser que les admins à modifier.
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated and (
            request.user.profile.role in ['ADMIN', 'WEBMASTER']
        )

class IsWebmaster(permissions.BasePermission):
    """
    Permission réservée aux webmasters.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.profile.role == 'WEBMASTER'

class CanManageContent(permissions.BasePermission):
    """
    Permission pour gérer le contenu (admin, webmaster, pasteur).
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated and (
            request.user.profile.role in ['ADMIN', 'WEBMASTER', 'PASTOR']
        )