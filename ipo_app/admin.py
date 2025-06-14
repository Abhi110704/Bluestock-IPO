from django.contrib import admin
from .models import IPO

@admin.register(IPO)
class IPOAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'status', 'open_date', 'close_date', 'ipo_price', 'listing_price', 'current_market_price')
    list_filter = ('status', 'issue_type')
    search_fields = ('company_name', 'status', 'issue_type')
