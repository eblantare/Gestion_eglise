# media/admin.py
from django.contrib import admin
from .models import MediaFile

@admin.register(MediaFile)
class MediaFileAdmin(admin.ModelAdmin):
    list_display = ['title', 'file_type', 'file_size', 'upload_date', 'uploaded_by', 'is_featured']
    list_filter = ['file_type', 'category', 'is_featured', 'upload_date']
    search_fields = ['title', 'description', 'name']
    readonly_fields = ['upload_date', 'file_size']
    fieldsets = (
        ('Informations générales', {
            'fields': ('title', 'description', 'file_type', 'category')
        }),
        ('Fichier', {
            'fields': ('file', 'is_featured')
        }),
        ('Métadonnées', {
            'fields': ('upload_date', 'uploaded_by', 'file_size'),
            'classes': ('collapse',)
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not obj.uploaded_by:
            obj.uploaded_by = request.user
        super().save_model(request, obj, form, change)