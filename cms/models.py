# cms/models.py - NOUVEAU FICHIER
from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
import uuid

class Page(models.Model):
    """Pages éditable par l'admin"""
    TEMPLATE_CHOICES = [
        ('default', 'Page standard'),
        ('home', 'Page d\'accueil'),
        ('contact', 'Page de contact'),
        ('events', 'Page des événements'),
        ('blog', 'Page du blog'),
    ]
    
    title = models.CharField(max_length=200, verbose_name="Titre")
    slug = models.SlugField(max_length=200, unique=True, verbose_name="URL")
    content = models.TextField(verbose_name="Contenu", blank=True)
    excerpt = models.TextField(max_length=500, blank=True, verbose_name="Extrait")
    template = models.CharField(max_length=50, choices=TEMPLATE_CHOICES, default='default')
    is_homepage = models.BooleanField(default=False, verbose_name="Page d'accueil")
    show_in_menu = models.BooleanField(default=True, verbose_name="Afficher dans le menu")
    meta_title = models.CharField(max_length=200, blank=True, verbose_name="Titre SEO")
    meta_description = models.TextField(blank=True, max_length=500, verbose_name="Description SEO")
    featured_image = models.ImageField(upload_to='pages/images/', null=True, blank=True)
    published = models.BooleanField(default=True, verbose_name="Publié")
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    order = models.IntegerField(default=0, help_text="Ordre d'affichage dans le menu")
    
    class Meta:
        ordering = ['order', 'title']
        verbose_name = "Page"
        verbose_name_plural = "Pages"
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        
        # S'assurer qu'une seule page est la homepage
        if self.is_homepage:
            Page.objects.filter(is_homepage=True).exclude(id=self.id).update(is_homepage=False)
        
        super().save(*args, **kwargs)

class Menu(models.Model):
    """Menu de navigation"""
    name = models.CharField(max_length=100, unique=True, verbose_name="Nom du menu")
    slug = models.SlugField(max_length=100, unique=True, verbose_name="Identifiant")
    location = models.CharField(max_length=50, default='main', verbose_name="Emplacement")
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Menu"
        verbose_name_plural = "Menus"
    
    def __str__(self):
        return f"{self.name} ({self.location})"

class MenuItem(models.Model):
    """Élément de menu"""
    LINK_TYPE_CHOICES = [
        ('page', 'Page'),
        ('post', 'Article'),
        ('event', 'Événement'),
        ('external', 'Lien externe'),
        ('custom', 'Personnalisé'),
    ]
    
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE, related_name='items')
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    title = models.CharField(max_length=100, verbose_name="Titre")
    link_type = models.CharField(max_length=20, choices=LINK_TYPE_CHOICES, default='page')
    page = models.ForeignKey(Page, on_delete=models.SET_NULL, null=True, blank=True)
    post = models.ForeignKey('posts.Post', on_delete=models.SET_NULL, null=True, blank=True)
    event = models.ForeignKey('events.Event', on_delete=models.SET_NULL, null=True, blank=True)
    external_url = models.URLField(blank=True, verbose_name="URL externe")
    custom_url = models.CharField(max_length=200, blank=True, verbose_name="URL personnalisée")
    order = models.IntegerField(default=0, verbose_name="Ordre")
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    
    class Meta:
        ordering = ['order', 'title']
        verbose_name = "Élément de menu"
        verbose_name_plural = "Éléments de menu"
    
    def __str__(self):
        return self.title
    
    def get_url(self):
        """Retourne l'URL cible"""
        if self.link_type == 'page' and self.page:
            return f'/pages/{self.page.slug}/'
        elif self.link_type == 'post' and self.post:
            return f'/posts/{self.post.slug}/'
        elif self.link_type == 'event' and self.event:
            return f'/events/{self.event.id}/'
        elif self.link_type == 'external':
            return self.external_url
        elif self.link_type == 'custom':
            return self.custom_url
        return '#'