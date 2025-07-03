from django.db import migrations, models
class Migration(migrations.Migration):
    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='IPO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=255)),
                ('logo', models.ImageField(blank=True, null=True, upload_to='logos/')),
                ('price_band', models.CharField(max_length=50)),
                ('open_date', models.DateField()),
                ('close_date', models.DateField()),
                ('issue_size', models.DecimalField(decimal_places=2, max_digits=15)),
                ('issue_type', models.CharField(max_length=50)),
                ('listing_date', models.DateField()),
                ('status', models.CharField(choices=[('upcoming', 'Upcoming'), ('ongoing', 'Ongoing'), ('listed', 'Listed')], max_length=20)),
                ('ipo_price', models.FloatField()),
                ('listing_price', models.FloatField(blank=True, null=True)),
                ('current_market_price', models.FloatField(blank=True, null=True)),
                ('rhp_pdf', models.FileField(blank=True, null=True, upload_to='docs/rhp/')),
                ('drhp_pdf', models.FileField(blank=True, null=True, upload_to='docs/drhp/')),
            ],
        ),
    ] 
