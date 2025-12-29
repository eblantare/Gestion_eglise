# cms/views.py - VERSION COMPLÈTE CORRIGÉE
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Page, Menu
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

@csrf_exempt
def pages_list_api(request):
    """API pour la liste des pages"""
    try:
        # Filtrer les pages publiées
        pages = Page.objects.filter(published=True).order_by('order', 'title')
        
        # Construire la réponse
        data = []
        for page in pages:
            # Déterminer la catégorie basée sur le template
            category = 'other'
            if page.template == 'about':
                category = 'about'
            elif page.template == 'ministries':
                category = 'ministries'
            
            data.append({
                'id': page.id,
                'title': page.title,
                'slug': page.slug,
                'content': page.content or '',
                'excerpt': page.excerpt or '',
                'category': category,
                'order': page.order,
                'is_published': page.published,
            })
        
        return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})
        
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def page_detail_api(request, slug):
    """API pour le détail d'une page"""
    try:
        page = Page.objects.get(slug=slug, published=True)
        data = {
            'id': page.id,
            'title': page.title,
            'slug': page.slug,
            'content': page.content or '',
            'excerpt': page.excerpt or '',
            'template': page.template,
        }
        return JsonResponse(data, json_dumps_params={'ensure_ascii': False})
    except Page.DoesNotExist:
        return JsonResponse({'error': 'Page non trouvée'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def page_detail(request, slug):
    """Affiche une page"""
    page = get_object_or_404(Page, slug=slug, published=True)
    context = {'page': page, 'title': page.title}
    return render(request, 'cms/page_detail.html', context)

def menu_list(request):
    """API pour les menus"""
    menus = Menu.objects.filter(is_active=True)
    data = {}
    for menu in menus:
        items = menu.items.filter(is_active=True, parent=None).order_by('order')
        menu_data = []
        for item in items:
            menu_data.append({
                'title': item.title,
                'url': item.get_url(),
                'children': [
                    {'title': child.title, 'url': child.get_url()}
                    for child in item.children.filter(is_active=True).order_by('order')
                ]
            })
        data[menu.location] = menu_data
    return JsonResponse(data)

def test_page(request):
    """Vue de test"""
    pages = Page.objects.filter(published=True)
    html = "<h1>Pages publiées :</h1><ul>"
    for page in pages:
        html += f'<li><a href="/cms/pages/{page.slug}/">{page.title}</a> - Slug: {page.slug}</li>'
    html += "</ul>"
    return HttpResponse(html)

def simple_pages_api(request):
    """API simple"""
    pages = Page.objects.filter(published=True)
    data = []
    for page in pages:
        data.append({
            'id': page.id,
            'title': page.title,
            'slug': page.slug,
            'url': f'/pages/{page.slug}/',
        })
    return JsonResponse(data, safe=False)