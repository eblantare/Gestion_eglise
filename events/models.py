from django.db import models
from django.utils import timezone

class Event(models.Model):
    EVENT_TYPES = [
        ('SERVICE', 'Culte'),
        ('PRAYER', 'Réunion de prière'),
        ('BIBLE_STUDY', 'Étude biblique'),
        ('YOUTH', 'Jeunesse'),
        ('SPECIAL', 'Événement spécial'),
    ]
    
    title = models.CharField(max_length=200, verbose_name="Titre")
    description = models.TextField(verbose_name="Description")
    event_type = models.CharField(max_length=50, choices=EVENT_TYPES, verbose_name="Type")
    date = models.DateTimeField(verbose_name="Date et heure")
    location = models.CharField(max_length=200, verbose_name="Lieu")
    speaker = models.CharField(max_length=100, blank=True, verbose_name="Orateur")
    is_published = models.BooleanField(default=True, verbose_name="Publié")
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-date']
        verbose_name = "Événement"
        verbose_name_plural = "Événements"
    
    def __str__(self):
        return f"{self.title} - {self.date.strftime('%d/%m/%Y %H:%M')}"