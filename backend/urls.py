# backend/urls.py - VERSION COMPLÈTE
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Applications
    path('api/events/', include('events.urls')),
    path('cms/api/', include('cms.urls')),
    path('api/auth/', include('members.urls')),
    path('api/posts/', include('posts.urls')),
    path('api/media/', include('media.urls')),
    
    # Summernote
    path('summernote/', include('django_summernote.urls')),
]

# Servir les fichiers médias en développement
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)