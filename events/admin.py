# events/admin.py - VERSION CORRIGÉE (sans event_type)
from django.contrib import admin
from .models import Event

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'location', 'is_published', 'author']
    list_filter = ['is_published', 'date']
    search_fields = ['title', 'excerpt', 'content', 'location']
    prepopulated_fields = {'slug': ('title',)}
    
    fieldsets = (
        ('Informations générales', {
            'fields': ('title', 'slug', 'excerpt', 'content')
        }),
        ('Détails de l\'événement', {
            'fields': ('date', 'location', 'featured_image')
        }),
        ('Paramètres', {
            'fields': ('is_published', 'author')
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not obj.author:
            obj.author = request.user
        super().save_model(request, obj, form, change)