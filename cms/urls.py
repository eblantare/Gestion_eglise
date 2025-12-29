# cms/urls.py - VERSION SIMPLIFIÉE
from django.urls import path
from . import views

urlpatterns = [
    # API pour le DynamicNavbar (IMPORTANT: doit correspondre à ce que cherche Next.js)
    path('pages/', views.pages_list_api, name='pages_list_api'),  # <-- C'EST CETTE URL QUE VOTRE NAVBAR APPELLE
    
    # Autres URLs
    path('pages/<slug:slug>/', views.page_detail_api, name='page_detail_api'),
    path('menus/', views.menu_list, name='menu_list_api'),
    path('simple-pages/', views.simple_pages_api, name='simple_pages_api'),
    path('test/', views.test_page, name='test_pages'),
]