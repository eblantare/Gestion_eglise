# members/views.py - VERSION FINALE COMPLÈTE
from rest_framework import generics, permissions, viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Member
from .serializers import UserSerializer, MemberSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated

# ==================== VUES D'AUTHENTIFICATION ====================

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    """Connexion utilisateur"""
    username = request.data.get('username')
    password = request.data.get('password')
    
    user = authenticate(username=username, password=password)
    
    if user is not None:
        refresh = RefreshToken.for_user(user)
        
        # Récupérer les données membre si elles existent
        member_data = None
        if hasattr(user, 'member'):
            # Utiliser un dictionnaire simple pour éviter les erreurs de sérialisation
            member = user.member
            member_data = {
                'id': member.id,
                'role': member.role,
                'display_role': member.display_role,
                'is_active': member.is_active,
                'is_staff_member': member.is_staff_member,
            }
        
        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'user': UserSerializer(user).data,
            'member': member_data
        })
    return Response(
        {'error': 'Identifiants invalides'}, 
        status=status.HTTP_401_UNAUTHORIZED
    )

@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    """Inscription utilisateur - VERSION FONCTIONNELLE"""
    try:
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        first_name = request.data.get('first_name', '')
        last_name = request.data.get('last_name', '')
        
        # Vérifications basiques
        if not username or not password or not email:
            return Response(
                {'error': 'Nom d\'utilisateur, mot de passe et email requis'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Vérifier si l'utilisateur existe déjà
        if User.objects.filter(username=username).exists():
            return Response(
                {'error': 'Ce nom d\'utilisateur existe déjà'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        if User.objects.filter(email=email).exists():
            return Response(
                {'error': 'Cet email est déjà utilisé'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Créer l'utilisateur
        user = User.objects.create_user(
            username=username,
            password=password,
            email=email,
            first_name=first_name,
            last_name=last_name
        )
        
        # Créer le membre associé
        member = Member.objects.create(
            user=user,
            first_name=first_name,
            last_name=last_name,
            email=email,
            role='MEMBER',  # Par défaut "Membre"
            is_active=True
        )
        
        # Générer les tokens
        refresh = RefreshToken.for_user(user)
        
        # Réponse avec données simples
        return Response({
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
            },
            'member': {
                'id': member.id,
                'role': member.role,
                'display_role': member.display_role,
                'is_active': member.is_active,
            },
            'message': 'Inscription réussie'
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        # Log l'erreur mais ne la renvoie pas au client (sécurité)
        import logging
        logger = logging.getLogger(__name__)
        logger.error(f"Erreur inscription: {str(e)}")
        
        return Response(
            {'error': 'Une erreur est survenue lors de l\'inscription'}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    """Déconnexion"""
    return Response({'message': 'Déconnexion réussie'})

# ==================== VUES UTILISATEUR ====================

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me_view(request):
    """Profil de l'utilisateur connecté"""
    user = request.user
    member_data = None
    
    if hasattr(user, 'member'):
        member = user.member
        member_data = {
            'id': member.id,
            'role': member.role,
            'display_role': member.display_role,
            'is_active': member.is_active,
            'phone': member.phone,
            'address': member.address,
            'membership_date': member.membership_date,
        }
    
    return Response({
        'user': UserSerializer(user).data,
        'member': member_data
    })

# ==================== VUES ADMINISTRATION ====================

class IsWebmaster(permissions.BasePermission):
    """Permission seulement pour les webmasters"""
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        return hasattr(request.user, 'member') and request.user.member.role == 'WEBMASTER'

class IsAdminOrWebmaster(permissions.BasePermission):
    """Permission pour admins et webmasters"""
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        if hasattr(request.user, 'member'):
            role = request.user.member.role
            return role in ['ADMIN', 'WEBMASTER']
        return False

class AdminUserListView(generics.ListAPIView):
    """Liste tous les utilisateurs (webmaster seulement)"""
    serializer_class = UserSerializer
    permission_classes = [IsWebmaster]
    
    def get_queryset(self):
        # Filtrer par rôle si spécifié
        role = self.request.query_params.get('role')
        queryset = User.objects.all().order_by('-date_joined')
        
        if role:
            queryset = queryset.filter(member__role=role)
        
        return queryset
    
    def list(self, request, *args, **kwargs):
        # Surcharge pour ajouter les données membre
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        
        # Ajouter les données membre à chaque utilisateur
        data = []
        for user_data in serializer.data:
            user = User.objects.get(id=user_data['id'])
            user_data_with_member = user_data.copy()
            
            if hasattr(user, 'member'):
                member = user.member
                user_data_with_member['member'] = {
                    'id': member.id,
                    'role': member.role,
                    'display_role': member.display_role,
                    'is_active': member.is_active,
                    'phone': member.phone,
                }
            
            data.append(user_data_with_member)
        
        return Response(data)

class AdminUserCreateView(generics.CreateAPIView):
    """Création d'utilisateur par admin/webmaster"""
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsWebmaster]
    
    def create(self, request, *args, **kwargs):
        # Extraire les données
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        first_name = request.data.get('first_name', '')
        last_name = request.data.get('last_name', '')
        role = request.data.get('role', 'MEMBER')
        
        # Valider le rôle
        valid_roles = [choice[0] for choice in Member.ROLE_CHOICES]
        if role not in valid_roles:
            return Response(
                {'error': f'Rôle invalide. Rôles valides: {", ".join(valid_roles)}'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Créer l'utilisateur
        user = User.objects.create_user(
            username=username,
            password=password,
            email=email,
            first_name=first_name,
            last_name=last_name
        )
        
        # Créer le membre avec le rôle spécifié
        member = Member.objects.create(
            user=user,
            first_name=first_name,
            last_name=last_name,
            email=email,
            role=role,
            is_active=True
        )
        
        return Response({
            'message': f'Utilisateur créé avec succès (rôle: {member.display_role})',
            'user': UserSerializer(user).data,
            'member': {
                'id': member.id,
                'role': member.role,
                'display_role': member.display_role,
            }
        }, status=status.HTTP_201_CREATED)

# ==================== VUES DES MEMBRES ====================

class MemberViewSet(viewsets.ModelViewSet):
    """Gestion complète des membres (CRUD)"""
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        
        # Les webmasters voient tout
        if hasattr(user, 'member') and user.member.role == 'WEBMASTER':
            return Member.objects.all()
        
        # Les admins voient tout sauf les webmasters
        if hasattr(user, 'member') and user.member.role == 'ADMIN':
            return Member.objects.exclude(role='WEBMASTER')
        
        # Les autres ne voient que les membres actifs
        return Member.objects.filter(is_active=True)

# ==================== VUES JWT ====================

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Sérialiseur JWT personnalisé avec infos utilisateur"""
    def validate(self, attrs):
        data = super().validate(attrs)
        
        # Ajouter les données utilisateur
        user = self.user
        data.update({
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
            }
        })
        
        # Ajouter les données membre si elles existent
        if hasattr(user, 'member'):
            member = user.member
            data['member'] = {
                'id': member.id,
                'role': member.role,
                'display_role': member.display_role,
                'is_active': member.is_active,
            }
        
        return data

class CustomTokenObtainPairView(TokenObtainPairView):
    """Vue JWT personnalisée"""
    serializer_class = CustomTokenObtainPairSerializer
    permission_classes = [AllowAny]

class CustomTokenRefreshView(TokenRefreshView):
    """Vue de rafraîchissement JWT personnalisée"""
    permission_classes = [AllowAny]