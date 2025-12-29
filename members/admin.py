from django.contrib import admin
from .models import Member

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'role', 'is_active', 'membership_date']
    list_filter = ['role', 'is_active', 'membership_date']
    search_fields = ['first_name', 'last_name', 'email', 'phone']
    list_editable = ['role', 'is_active']
    readonly_fields = ['user']  # Si vous voulez rendre user en lecture seule
    
    fieldsets = (
        ('Informations personnelles', {
            'fields': ('user', 'first_name', 'last_name', 'email', 'phone', 'address', 'photo')
        }),
        ('Informations spirituelles', {
            'fields': ('role', 'baptism_date', 'membership_date')
        }),
        ('Statut', {
            'fields': ('is_active', 'notes')
        }),
    )
    
    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
    full_name.short_description = "Nom complet"