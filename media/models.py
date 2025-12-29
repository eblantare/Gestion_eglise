# media/models.py - VERSION CORRIGÉE
from django.db import models
from django.contrib.auth.models import User
from django_summernote.models import AbstractAttachment  # IMPORTANT

class MediaFile(AbstractAttachment):  # Hériter de AbstractAttachment
    """Modèle pour les fichiers multimédias"""
    title = models.CharField(max_length=200, verbose_name="Titre", blank=True)
    description = models.TextField(blank=True, verbose_name="Description")
    upload_date = models.DateTimeField(auto_now_add=True, verbose_name="Date d'upload")
    uploaded_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    
    # Champs spécifiques à votre application
    file_type = models.CharField(
        max_length=50,
        choices=[
            ('image', 'Image'),
            ('video', 'Vidéo'),
            ('audio', 'Audio'),
            ('document', 'Document'),
        ],
        default='image',
        verbose_name="Type de fichier"
    )
    
    category = models.CharField(
        max_length=100,
        blank=True,
        verbose_name="Catégorie"
    )
    
    is_featured = models.BooleanField(default=False, verbose_name="À la une")
    
    class Meta:
        ordering = ['-upload_date']
        verbose_name = "Fichier média"
        verbose_name_plural = "Fichiers médias"
    
    def __str__(self):
        return self.title or self.name or f"Fichier {self.id}"
    
    @property
    def name(self):
        """Retourne le nom du fichier sans le chemin"""
        if self.file:
            return self.file.name.split('/')[-1]
        return ""
    
    @property
    def file_size(self):
        """Retourne la taille du fichier en format lisible"""
        if self.file:
            size = self.file.size
            for unit in ['B', 'KB', 'MB', 'GB']:
                if size < 1024.0:
                    return f"{size:.1f} {unit}"
                size /= 1024.0
        return "0 B"