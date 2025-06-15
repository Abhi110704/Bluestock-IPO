from pathlib import Path
import os
from dotenv import load_dotenv
import dj_database_url

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv('SECRET_KEY')
DEBUG = os.getenv('DEBUG', 'False') == 'True'
ALLOWED_HOSTS = ['*']

# Application definition (same as before)
INSTALLED_APPS = [
    ...
]

# Middleware (same as before)
MIDDLEWARE = [
    ...
]

ROOT_URLCONF = 'ipo_project.urls'

TEMPLATES = [
    ...
]

WSGI_APPLICATION = 'ipo_project.wsgi.application'

# ✅ Secure PostgreSQL Render DB config
DATABASES = {
    'default': dj_database_url.config(
        default=os.getenv('DATABASE_URL'),
        conn_max_age=600,
        ssl_require=True
    )
}

# Static & media
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
STATIC_ROOT = BASE_DIR / 'staticfiles'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Security
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
