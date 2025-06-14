# ipo_project/urls.py
from django.contrib import admin
from django.urls import path, include
from ipo_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.ipo_list_view, name='ipo-list'),
    path('api/', include('ipo_app.urls')),
]
