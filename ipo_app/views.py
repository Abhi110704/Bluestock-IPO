from rest_framework import viewsets, filters
from .models import IPO
from .serializers import IPOSerializer
from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.pagination import PageNumberPagination

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class IPOViewSet(viewsets.ModelViewSet):
    queryset = IPO.objects.all().order_by('-open_date')
    serializer_class = IPOSerializer
    pagination_class = StandardResultsSetPagination

    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['company_name', 'issue_type', 'status']
    ordering_fields = ['listing_date', 'ipo_price', 'current_market_price']

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return JsonResponse(serializer.data, safe=False)

class ReactAppView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

def ipo_chart_data(request):
    # TODO: Replace with real data from your models
    labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    values = [3, 7, 4, 6, 5]
    return JsonResponse({'labels': labels, 'values': values})
