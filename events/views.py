# events/views.py - VERSION COMPLÈTE CORRIGÉE
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Event

@csrf_exempt
def events_list_api(request):
    """API pour la liste des événements"""
    try:
        # Filtrer seulement les événements publiés
        events = Event.objects.filter(is_published=True).order_by('-date')
        
        # Préparer les données
        data = []
        for event in events:
            data.append({
                'id': event.id,
                'title': event.title,
                'slug': event.slug,
                'excerpt': event.excerpt or '',
                'content': event.content or '',
                'date': event.date.isoformat() if event.date else None,
                'location': event.location or '',
                'featured_image': event.featured_image.url if event.featured_image else None,
                'is_published': event.is_published,
                'created_at': event.created_at.isoformat(),
                'updated_at': event.updated_at.isoformat(),
            })
        
        return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})
        
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
def event_detail_api(request, slug):
    """API pour le détail d'un événement"""
    try:
        event = Event.objects.get(slug=slug, is_published=True)
        data = {
            'id': event.id,
            'title': event.title,
            'slug': event.slug,
            'content': event.content or '',
            'excerpt': event.excerpt or '',
            'date': event.date.isoformat() if event.date else None,
            'location': event.location or '',
            'featured_image': event.featured_image.url if event.featured_image else None,
        }
        return JsonResponse(data, json_dumps_params={'ensure_ascii': False})
    except Event.DoesNotExist:
        return JsonResponse({'error': 'Événement non trouvé'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
def events_by_category_api(request, category):
    """API pour les événements par catégorie"""
    try:
        # Pour l'instant, retourner tous les événements
        events = Event.objects.filter(is_published=True).order_by('-date')
        
        data = []
        for event in events:
            data.append({
                'id': event.id,
                'title': event.title,
                'slug': event.slug,
                'excerpt': event.excerpt or '',
                'date': event.date.isoformat() if event.date else None,
                'location': event.location or '',
                'featured_image': event.featured_image.url if event.featured_image else None,
                'is_published': event.is_published,
            })
        
        return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})
        
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)