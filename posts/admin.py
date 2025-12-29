# posts/admin.py - VERSION AVEC DÉCORATEUR SEUL
from django.contrib import admin
from .models import Post

@admin.register(Post)  # ← UNIQUEMENT CECI
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'status', 'author', 'published_date']
    list_filter = ['status', 'category', 'published_date']
    search_fields = ['title', 'content', 'excerpt']
    list_editable = ['status']
    
    fieldsets = (
        ('Contenu', {
            'fields': ('title', 'slug', 'excerpt', 'content', 'featured_image')
        }),
        ('Métadonnées', {
            'fields': ('category', 'status', 'author', 'published_date')
        }),
    )
    
    prepopulated_fields = {'slug': ('title',)}
    
    # PAS de admin.site.register(Post, PostAdmin) à la fin !