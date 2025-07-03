from django.core.management.base import BaseCommand
from ipo_app.models import IPO
from datetime import datetime, timedelta

class Command(BaseCommand):
    help = 'Loads sample IPO data'

    def handle(self, *args, **kwargs):
        IPO.objects.all().delete()
        sample_ipos = [
            {
                'company_name': 'TechCorp Solutions',
                'price_band': '₹850-900',
                'open_date': datetime.now().date(),
                'close_date': (datetime.now() + timedelta(days=3)).date(),
                'issue_size': 500.00,  # 500 crores
                'issue_type': 'Book Built',
                'listing_date': (datetime.now() + timedelta(days=10)).date(),
                'status': 'ongoing',
                'ipo_price': 875.0,
            },
            {
                'company_name': 'Green Energy Ltd',
                'price_band': '₹1200-1250',
                'open_date': (datetime.now() + timedelta(days=5)).date(),
                'close_date': (datetime.now() + timedelta(days=8)).date(),
                'issue_size': 750.00,  
                'issue_type': 'Book Built',
                'listing_date': (datetime.now() + timedelta(days=15)).date(),
                'status': 'upcoming',
                'ipo_price': 1225.0,
            },
            {
                'company_name': 'Digital Payments Co',
                'price_band': '₹950-1000',
                'open_date': (datetime.now() - timedelta(days=20)).date(),
                'close_date': (datetime.now() - timedelta(days=17)).date(),
                'issue_size': 300.00,  
                'issue_type': 'Book Built',
                'listing_date': (datetime.now() - timedelta(days=10)).date(),
                'status': 'listed',
                'ipo_price': 975.0,
                'listing_price': 1050.0,
                'current_market_price': 1100.0,
            },
        ]
        for ipo_data in sample_ipos:
            IPO.objects.create(**ipo_data)

        self.stdout.write(self.style.SUCCESS('Successfully loaded sample IPO data')) 
