from rest_framework import viewsets
from .models import Sweet
from .serializers import SweetSerializer
from rest_framework.permissions import AllowAny  #IsAdminUser
from rest_framework.decorators import action
from rest_framework.response import Response

class SweetViewSet(viewsets.ModelViewSet):
    queryset = Sweet.objects.all()
    serializer_class = SweetSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            self.permission_classes = [AllowAny]
        return super().get_permissions()
