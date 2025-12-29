# members/urls.py - VERSION CORRIGÉE
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'members', views.MemberViewSet)

urlpatterns = [
    # ==================== AUTHENTIFICATION ====================
    path('auth/login/', views.login_view, name='login'),  # PAS d'espace !
    path('auth/register/', views.register_view, name='register'),
    path('auth/logout/', views.logout_view, name='logout'),
    path('auth/me/', views.me_view, name='me'),
    
    # ==================== JWT TOKENS ====================
    path('auth/token/', views.CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', views.CustomTokenRefreshView.as_view(), name='token_refresh'),
    
    # ==================== ADMINISTRATION ====================
    path('admin/users/', views.AdminUserListView.as_view(), name='admin-user-list'),
    path('admin/users/create/', views.AdminUserCreateView.as_view(), name='admin-user-create'),
    
    # ==================== MEMBRES (ViewSet) ====================
    path('', include(router.urls)),
]

# URLs supplémentaires pour le ViewSet
urlpatterns += [
    path('members/<int:pk>/activate/', views.MemberViewSet.as_view({'post': 'activate'}), name='member-activate'),
    path('members/<int:pk>/deactivate/', views.MemberViewSet.as_view({'post': 'deactivate'}), name='member-deactivate'),
]