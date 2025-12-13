# backend/views.py
from django.http import JsonResponse
from members.models import Member
from events.models import Event
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