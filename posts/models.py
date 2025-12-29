# posts/models.py - VERSION FRANÇAISE
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
import random
import string

class Post(models.Model):
    STATUS_CHOICES = [
        ('brouillon', 'Brouillon'),
        ('publié', 'Publié'),
        ('archivé', 'Archivé'),
    ]
    
    CATEGORY_CHOICES = [
        ('actualites', 'Actualités'),
        ('sermon', 'Sermon'),
        ('article', 'Article'),
        ('annonce', 'Annonce'),
        ('temoignage', 'Témoignage'),
        ('evenement', 'Événement'),
        ('enseignement', 'Enseignement'),
        ('priere', 'Prière'),
        ('louange', 'Louange'),
        ('jeunesse', 'Jeunesse'),
        ('femmes', 'Femmes'),
        ('hommes', 'Hommes'),
        ('enfants', 'Enfants'),
        ('missions', 'Missions'),
        ('projets', 'Projets'),
    ]
    
    title = models.CharField(max_length=200, verbose_name="Titre")
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    content = models.TextField(verbose_name="Contenu")
    excerpt = models.TextField(max_length=500, blank=True, verbose_name="Extrait")
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    category = models.CharField(
        max_length=50, 
        choices=CATEGORY_CHOICES, 
        default='article',
        verbose_name="Catégorie"
    )
    status = models.CharField(
        max_length=50, 
        choices=STATUS_CHOICES, 
        default='brouillon',
        verbose_name="Statut"
    )
    featured_image = models.ImageField(
        upload_to='posts/images/', 
        blank=True, 
        null=True,
        verbose_name="Image mise en avant"
    )
    views = models.IntegerField(default=0, verbose_name="Vues")
    published_date = models.DateTimeField(null=True, blank=True, verbose_name="Date de publication")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Créé le")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Mis à jour le")
    
    class Meta:
        ordering = ['-published_date', '-created_at']
        verbose_name = "Article"
        verbose_name_plural = "Articles"
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = self.title.lower().replace(' ', '-')
            random_chars = ''.join(random.choices(string.ascii_lowercase + string.digits, k=6))
            self.slug = f"{base_slug}-{random_chars}"[:200]
        
        if self.status == 'publié' and not self.published_date:  # ← Changé ici
            self.published_date = timezone.now()
        
        super().save(*args, **kwargs)
    
    def is_published(self):
        return self.status == 'publié' and self.published_date is not None  # ← Changé ici