# VÉRIFIEZ CE FICHIER
from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Event(models.Model):
    # VOUS AVEZ PROBABLEMENT CE CHAMP:
    EVENT_TYPES = [
        ('service', 'Culte'),
        ('prayer', 'Prière'),
        ('conference', 'Conférence'),
        ('youth', 'Jeunesse'),
        ('worship', 'Louange'),
        ('other', 'Autre'),
    ]
    
    title = models.CharField(max_length=200, verbose_name="Titre")
    slug = models.SlugField(max_length=200, unique=True, verbose_name="URL", blank=True)
    excerpt = models.TextField(max_length=500, blank=True, verbose_name="Extrait")
    content = models.TextField(verbose_name="Contenu", blank=True)
    date = models.DateTimeField(verbose_name="Date de l'événement")
    location = models.CharField(max_length=200, blank=True, verbose_name="Lieu")
    featured_image = models.ImageField(upload_to='events/images/', null=True, blank=True)
    is_published = models.BooleanField(default=True, verbose_name="Publié")
    
    # CE CHAMP CAUSE LE PROBLÈME - IL EST "NOT NULL"
    event_type = models.CharField(
        max_length=50,
        choices=EVENT_TYPES,
        default='other',  # ASSUREZ-VOUS QU'IL Y A UNE VALEUR PAR DÉFAUT
        verbose_name="Type d'événement"
    )
    
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-date']
        verbose_name = "Événement"
        verbose_name_plural = "Événements"
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)