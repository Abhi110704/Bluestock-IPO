from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IPOViewSet, ipo_chart_data

router = DefaultRouter()
router.register('ipo', IPOViewSet, basename='ipo')

urlpatterns = [
    path('', include(router.urls)),                 # This will now be just 'ipo/' within ipo_app.urls
    path('chart-data/', ipo_chart_data, name='ipo_chart_data'),
]
