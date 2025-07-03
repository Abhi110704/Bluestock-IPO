from django.db import models

IPO_STATUS_CHOICES = [
    ('upcoming', 'Upcoming'),
    ('ongoing', 'Ongoing'),
    ('listed', 'Listed'),
]

class IPO(models.Model):
    company_name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='logos/', null=True, blank=True)
    price_band = models.CharField(max_length=50)
    open_date = models.DateField()
    close_date = models.DateField()
    issue_size = models.DecimalField(max_digits=15, decimal_places=2)  # Store in crores
    issue_type = models.CharField(max_length=50)
    listing_date = models.DateField()
    status = models.CharField(max_length=20, choices=IPO_STATUS_CHOICES)
    ipo_price = models.FloatField()
    listing_price = models.FloatField(blank=True, null=True)
    current_market_price = models.FloatField(blank=True, null=True)
    rhp_pdf = models.FileField(upload_to='docs/rhp/', blank=True, null=True)
    drhp_pdf = models.FileField(upload_to='docs/drhp/', blank=True, null=True)

    def __str__(self):
        return self.company_name

