from rest_framework import viewsets
from .models import Event
from .serializers import EventSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()  # Pour tester, utilisez .all()
    serializer_class = EventSerializer