# backend/urls.py - AJOUTEZ L'IMPORT ET LA ROUTE
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views  # AJOUTEZ CETTE LIGNE

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('members.urls')),   # API des membres
    path('api/', include('events.urls')),    # API des événements
    path('api/auth/', include('rest_framework.urls')),  # Login DRF
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/stats/', views.get_stats, name='stats'),  # AJOUTEZ CETTE LIGNE
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)