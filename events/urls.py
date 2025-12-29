# events/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.events_list_api, name='events-list-api'),
    path('<slug:slug>/', views.event_detail_api, name='event-detail-api'),
    path('category/<str:category>/', views.events_by_category_api, name='events-by-category'),
]