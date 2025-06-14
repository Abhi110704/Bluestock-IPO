from django.urls import path, include
from .views import IPOViewSet, ipo_list_view, ipo_chart_data
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('ipo', IPOViewSet)

urlpatterns = [
    path('', ipo_list_view, name='ipo-list-ui'),        # 🌐 Home page
    path('api/', include(router.urls)),                 # 🔌 API endpoints
    path('chart-data/', ipo_chart_data, name='ipo_chart_data'),
]
