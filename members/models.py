# members/models.py - VERSION FINALE COMPLÈTE
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver

# Modèle Member (pour les données détaillées)
class Member(models.Model):
    ROLE_CHOICES = [
        ('VISITOR', 'Visiteur'),
        ('MEMBER', 'Membre'),
        ('DEACON', 'Diacre'),
        ('ELDER', 'Ancien'),
        ('PASTOR', 'Pasteur'),
        ('GROUP_LEADER', 'Responsable de groupe'),  # ← AJOUTÉ
        ('ADMIN', 'Administrateur'),
        ('WEBMASTER', 'Webmaster'),
    ]
    
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE, 
        related_name='member',
        null=True,  # ← AJOUTÉ pour éviter erreurs migration
        blank=True  # ← AJOUTÉ
    )
    first_name = models.CharField(max_length=100, verbose_name="Prénom")
    last_name = models.CharField(max_length=100, verbose_name="Nom")
    role = models.CharField(
        max_length=20, 
        choices=ROLE_CHOICES, 
        default='MEMBER', 
        verbose_name="Rôle"
    )
    email = models.EmailField(unique=True, verbose_name="Email")
    phone = models.CharField(max_length=20, blank=True, verbose_name="Téléphone")
    address = models.TextField(blank=True, verbose_name="Adresse")
    baptism_date = models.DateField(null=True, blank=True, verbose_name="Date de baptême")
    membership_date = models.DateField(default=timezone.now, verbose_name="Date d'adhésion")
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    photo = models.ImageField(
        upload_to='members/photos/', 
        null=True, 
        blank=True, 
        verbose_name="Photo"
    )
    notes = models.TextField(blank=True, verbose_name="Notes")
    
    class Meta:
        ordering = ['last_name', 'first_name']
        verbose_name = "Membre"
        verbose_name_plural = "Membres"
        indexes = [
            models.Index(fields=['last_name', 'first_name']),
            models.Index(fields=['role']),
            models.Index(fields=['is_active']),
        ]
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.get_role_display()})"
    
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    @property
    def display_role(self):
        """Retourne le rôle en français"""
        role_dict = dict(self.ROLE_CHOICES)
        return role_dict.get(self.role, self.role)
    
    @property
    def is_staff_member(self):
        """Vérifie si c'est un membre du staff (pasteur, diacre, ancien, responsable)"""
        return self.role in ['PASTOR', 'DEACON', 'ELDER', 'GROUP_LEADER', 'ADMIN', 'WEBMASTER']