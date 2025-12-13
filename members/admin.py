# members/admin.py - VERSION FINALE
from django.contrib import admin
from .models import Member  # ← SEULEMENT Member

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'role', 'is_active', 'membership_date')
    list_filter = ('role', 'is_active', 'membership_date')
    search_fields = ('first_name', 'last_name', 'email', 'phone')
    ordering = ('last_name', 'first_name')
    
    fieldsets = (
        ('Informations personnelles', {
            'fields': ('user', 'first_name', 'last_name', 'email', 'phone', 'address', 'photo')
        }),
        ('Statut dans l\'église', {
            'fields': ('role', 'baptism_date', 'membership_date', 'is_active')
        }),
        ('Notes', {
            'fields': ('notes',),
            'classes': ('collapse',)
        }),
    )