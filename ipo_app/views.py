from rest_framework import viewsets, filters
from .models import IPO
from .serializers import IPOSerializer
from django.http import JsonResponse
from django.shortcuts import render
from django.db.models import Q

# 🧩 API ViewSet
class IPOViewSet(viewsets.ModelViewSet):
    queryset = IPO.objects.all().order_by('-open_date')
    serializer_class = IPOSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['company_name', 'issue_type', 'status']
    ordering_fields = ['listing_date', 'ipo_price', 'current_market_price']

# 🌐 HTML UI View
def ipo_list_view(request):
    query = request.GET.get('q')
    ipos = IPO.objects.all().order_by('-open_date')
    
    if query:
        ipos = ipos.filter(
            Q(company_name__icontains=query) |
            Q(status__icontains=query) |
            Q(issue_type__icontains=query)
        )

    return render(request, 'ipo_app/ipo_list.html', {'ipos': ipos})

# 📊 Chart API endpoint (for future visualization)
def ipo_chart_data(request):
    ipos = IPO.objects.all().order_by('-listing_date')[:10]
    labels = [ipo.company_name for ipo in ipos]
    ipo_prices = [ipo.ipo_price for ipo in ipos]
    current_prices = [ipo.current_market_price or 0 for ipo in ipos]

    return JsonResponse({
        'labels': labels,
        'ipo_prices': ipo_prices,
        'current_prices': current_prices,
    })
