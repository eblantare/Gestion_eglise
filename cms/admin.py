# cms/admin.py - VERSION CORRIGÉE COMPLÈTE
from django.contrib import admin
from django.utils.html import format_html
from .models import Page, Menu, MenuItem

@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'is_homepage', 'template', 'published', 'author', 'updated_at']
    list_filter = ['published', 'is_homepage', 'template', 'author']
    list_editable = ['published', 'is_homepage']
    search_fields = ['title', 'content', 'excerpt']
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ['created_at', 'updated_at', 'featured_image_preview']
    
    fieldsets = (
        ('Contenu', {
            'fields': ('title', 'slug', 'excerpt', 'content', 'featured_image', 'featured_image_preview')
        }),
        ('Paramètres', {
            'fields': ('template', 'is_homepage', 'show_in_menu', 'published', 'author')
        }),
        ('SEO', {
            'classes': ('collapse',),
            'fields': ('meta_title', 'meta_description')
        }),
        ('Dates', {
            'classes': ('collapse',),
            'fields': ('created_at', 'updated_at')
        }),
    )
    
    def featured_image_preview(self, obj):
        if obj.featured_image:
            return format_html(
                '<img src="{}" style="max-height: 200px;" />',
                obj.featured_image.url
            )
        return "Aucune image"
    featured_image_preview.short_description = "Aperçu"

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'location', 'item_count', 'is_active']
    list_editable = ['is_active']
    prepopulated_fields = {'slug': ('name',)}
    
    def item_count(self, obj):
        return obj.items.count()
    item_count.short_description = "Nombre d'éléments"

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ['title', 'menu', 'parent', 'link_type', 'order', 'is_active']
    list_filter = ['menu', 'link_type', 'is_active']
    list_editable = ['order', 'is_active']
    search_fields = ['title', 'menu__name']
    ordering = ['menu', 'order']