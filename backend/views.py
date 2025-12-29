# backend/views.py COMPLET
from django.http import JsonResponse
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import render
from members.models import Member
from events.models import Event
from posts.models import Post
from cms.models import Page
from django.utils import timezone
from django.db.models import Count

def get_stats(request):
    try:
        total_members = Member.objects.filter(is_active=True).count()
        
        upcoming_events = Event.objects.filter(
            date__gte=timezone.now(),
            is_published=True
        ).count()
        
        recent_members = Member.objects.filter(
            is_active=True
        ).order_by('-membership_date')[:5].values('id', 'first_name', 'last_name', 'role')
        
        next_events = Event.objects.filter(
            date__gte=timezone.now(),
            is_published=True
        ).order_by('date')[:3].values('id', 'title', 'date', 'location')
        
        return JsonResponse({
            'members': total_members,
            'events': upcoming_events,
            'recent_members': list(recent_members),
            'upcoming_events': list(next_events),
        })
    except Exception as e:
        return JsonResponse({
            'error': str(e),
            'members': 0,
            'events': 0,
            'recent_members': [],
            'upcoming_events': [],
        }, status=500)

@staff_member_required
def admin_dashboard(request):
    """Tableau de bord personnalisé pour l'admin"""
    try:
        context = {
            'posts_count': Post.objects.count(),
            'events_count': Event.objects.count(),
            'members_count': Member.objects.filter(is_active=True).count(),
            'pages_count': Page.objects.count(),
            'recent_posts': Post.objects.order_by('-created_at')[:5],
            'upcoming_events': Event.objects.filter(is_published=True).order_by('date')[:5],
        }
    except Exception as e:
        # Si les modèles n'existent pas encore
        context = {
            'posts_count': 0,
            'events_count': 0,
            'members_count': 0,
            'pages_count': 0,
            'recent_posts': [],
            'upcoming_events': [],
        }
    
    return render(request, 'admin/custom_dashboard.html', context)