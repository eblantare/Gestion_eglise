# create_test_data_fixed.py - VERSION CORRIGÉE
import os
import sys
import django
from datetime import datetime, timedelta
from django.utils import timezone

# Configure Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

django.setup()

from django.contrib.auth.models import User
from events.models import Event
from cms.models import Page

def create_test_data():
    print("=" * 60)
    print("CRÉATION DE DONNÉES DE TEST - VERSION CORRIGÉE")
    print("=" * 60)
    
    # 1. Créer un utilisateur admin si nécessaire
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser(
            username='admin',
            email='admin@eglise.local',
            password='admin123'
        )
        print("✅ Superutilisateur créé: admin / admin123")
    
    admin_user = User.objects.get(username='admin')
    
    # 2. Créer des événements AVEC event_type
    print("\n📅 CRÉATION D'ÉVÉNEMENTS:")
    event_data = [
        {
            'title': 'Culte du Dimanche',
            'slug': 'culte-dimanche',
            'excerpt': 'Culte hebdomadaire avec prédication et louange',
            'content': 'Rejoignez-nous pour notre culte dominical.',
            'date': timezone.now() + timedelta(days=1, hours=10),
            'location': 'Église de la Grande Grâce-Défalé',
            'is_published': True,
            'author': admin_user,
            'event_type': 'service'  # AJOUTÉ
        },
        {
            'title': 'Réunion de Prière Communautaire',
            'slug': 'reunion-priere',
            'excerpt': 'Temps de prière pour toute la communauté',
            'content': 'Venez déposer vos requêtes et prier ensemble.',
            'date': timezone.now() + timedelta(days=2, hours=19),
            'location': 'Salle de prière principale',
            'is_published': True,
            'author': admin_user,
            'event_type': 'prayer'  # AJOUTÉ
        },
        {
            'title': 'Conférence Jeunesse "Ta Foi, Ton Futur"',
            'slug': 'conference-jeunesse',
            'excerpt': 'Événement spécial pour les jeunes de 15 à 30 ans',
            'content': 'Une journée d\'enseignement pour les jeunes.',
            'date': timezone.now() + timedelta(days=5, hours=9),
            'location': 'Auditorium CDEJ-RAFISSA',
            'is_published': True,
            'author': admin_user,
            'event_type': 'youth'  # AJOUTÉ
        },
        {
            'title': 'Soirée Louange et Adoration',
            'slug': 'soiree-louange',
            'excerpt': 'Soirée spéciale de louange',
            'content': 'Venez célébrer Dieu en musique et en chant.',
            'date': timezone.now() + timedelta(days=7, hours=18),
            'location': 'Sanctuaire principal',
            'is_published': True,
            'author': admin_user,
            'event_type': 'worship'  # AJOUTÉ
        },
        {
            'title': 'Christmas Chez Nous - Noël 2024',
            'slug': 'christmas-chez-nous',
            'excerpt': 'Célébration spéciale de Noël',
            'content': 'Une soirée mémorable pour célébrer Noël.',
            'date': timezone.make_aware(datetime(2024, 12, 24, 19, 30)),
            'location': 'Église et jardins extérieurs',
            'is_published': True,
            'author': admin_user,
            'event_type': 'other'  # AJOUTÉ
        }
    ]
    
    events_created = 0
    for data in event_data:
        try:
            if not Event.objects.filter(slug=data['slug']).exists():
                Event.objects.create(**data)
                print(f"   ✅ {data['title']} ({data['event_type']})")
                events_created += 1
            else:
                print(f"   ⚡ Déjà existant: {data['title']}")
        except Exception as e:
            print(f"   ❌ Erreur création {data['title']}: {e}")
    
    # 3. Créer des pages CMS
    print("\n📄 CRÉATION DE PAGES CMS:")
    page_data = [
        {
            'title': 'Notre Histoire',
            'slug': 'histoire',
            'content': 'Histoire de notre église...',
            'excerpt': 'Découvrez les origines',
            'template': 'about',
            'published': True,
            'order': 1
        },
        {
            'title': 'Nos Croyances',
            'slug': 'croyances',
            'content': 'Nos fondements doctrinaux...',
            'excerpt': 'Les fondements de notre foi',
            'template': 'about',
            'published': True,
            'order': 2
        },
        {
            'title': 'CDEJ-RAFISSA',
            'slug': 'cdej-rafissa',
            'content': 'Notre ministère pour les enfants et jeunes...',
            'excerpt': 'Ministère dédié aux enfants et jeunes',
            'template': 'ministries',
            'published': True,
            'order': 1
        },
        {
            'title': 'Louange et Adoration',
            'slug': 'louange',
            'content': 'Notre équipe de louange...',
            'excerpt': 'Ministère de louange et musique',
            'template': 'ministries',
            'published': True,
            'order': 2
        },
        {
            'title': 'École du Dimanche',
            'slug': 'ecole-dimanche',
            'content': 'École du dimanche pour tous les âges...',
            'excerpt': 'Enseignement biblique pour enfants',
            'template': 'ministries',
            'published': True,
            'order': 3
        }
    ]
    
    pages_created = 0
    for data in page_data:
        try:
            if not Page.objects.filter(slug=data['slug']).exists():
                Page.objects.create(**data)
                print(f"   ✅ {data['title']}")
                pages_created += 1
            else:
                print(f"   ⚡ Déjà existant: {data['title']}")
        except Exception as e:
            print(f"   ❌ Erreur création {data['title']}: {e}")
    
    # 4. Résumé
    print("\n" + "=" * 60)
    print("RÉSUMÉ:")
    print("=" * 60)
    
    events_total = Event.objects.count()
    events_published = Event.objects.filter(is_published=True).count()
    pages_total = Page.objects.count()
    pages_published = Page.objects.filter(published=True).count()
    
    print(f"📅 Événements: {events_total} total, {events_published} publiés")
    print(f"📄 Pages: {pages_total} total, {pages_published} publiées")
    print(f"🎯 Créés cette fois: {events_created} événements, {pages_created} pages")
    
    print("\n" + "=" * 60)
    print("TESTS:")
    print("=" * 60)
    print("1. http://localhost:8000/api/events/")
    print("2. http://localhost:8000/cms/api/pages/")
    print("3. http://localhost:8000/admin/")
    
    return events_created > 0 or pages_created > 0

if __name__ == "__main__":
    success = create_test_data()
    if success:
        print("\n✅ Données créées avec succès!")
        print("Redémarrez Next.js et testez le menu.")
    else:
        print("\n⚠️ Aucune donnée nouvelle créée (peut-être déjà existante)")