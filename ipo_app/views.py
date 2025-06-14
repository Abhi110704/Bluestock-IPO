from rest_framework import viewsets, filters
from .models import IPO
from .serializers import IPOSerializer
from django.http import JsonResponse

class IPOViewSet(viewsets.ModelViewSet):
    queryset = IPO.objects.all().order_by('-open_date')
    serializer_class = IPOSerializer

    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['company_name', 'issue_type', 'status']
    ordering_fields = ['listing_date', 'ipo_price', 'current_market_price']

from django.shortcuts import render
from .models import IPO

def ipo_list_view(request):
    ipos = IPO.objects.all().order_by('-open_date')
    return render(request, 'ipo_app/ipo_list.html', {'ipos': ipos})

def ipo_chart_data(request):
    # TODO: Replace with real data from your models
    labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    values = [3, 7, 4, 6, 5]
    return JsonResponse({'labels': labels, 'values': values})
