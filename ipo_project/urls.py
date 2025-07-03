from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from ipo_app.views import ReactAppView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', ReactAppView.as_view(), name='home'),
    path('api/', include('ipo_app.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
