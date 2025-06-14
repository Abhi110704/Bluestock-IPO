# 📊 Bluestock IPO Listings

A modern, responsive Django web app to track, view, and manage Initial Public Offerings (IPOs). Built with PostgreSQL, Django REST Framework, and a custom-designed UI.

## 🎯 Features

- 🔍 Search and filter IPO listings
- 🌙 Light & dark mode toggle
- 📱 Fully responsive on all devices
- 💾 Image upload support
- ⚡ Scroll animations using Animate.css
- ✨ Smooth transitions & minimal UI
- ✅ Admin panel for managing IPOs
- 🎨 Dark blue themed modern design

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS (custom), Animate.css
- **Backend:** Django 5.0, Django REST Framework
- **Database:** PostgreSQL
- **Hosting:** GitHub + Render (optional)
- **Other:** Pillow (for image uploads)

---

## 🖼️ Screenshot

![Bluestock UI Preview 1](https://raw.githubusercontent.com/Abhi110704/Bluestock-IPO/refs/heads/main/Sample%20Project%20Files/Screenshot%202025-06-14%20190611.png)
![Bluestock UI Preview 2](https://raw.githubusercontent.com/Abhi110704/Bluestock-IPO/refs/heads/main/Sample%20Project%20Files/Screenshot%202025-06-14%20190626.png)

---

## 🧩 Setup Instructions

1. **Clone the repo:**

   ```bash
   git clone https://github.com/Abhi110704/bluestock-ipo.git
   cd bluestock-ipo
   ```

2. **Create virtual environment and activate:**

   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Create `.env` or configure PostgreSQL settings in `settings.py`:**

   ```env
   DATABASE_URL=postgres://youruser:yourpassword@localhost:5432/ipo_db
   ```

5. **Run migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Start development server:**

   ```bash
   python manage.py runserver
   ```

7. **Create superuser to manage from admin panel:**

   ```bash
   python manage.py createsuperuser
   ```

---

## 📂 Folder Structure

```
bluestock-ipo/
├── ipo_project/
│   └── settings.py
├── ipo_app/
│   ├── models.py
│   ├── views.py
│   └── templates/ipo_app/ipo_list.html
├── static/
│   └── styles, js, etc.
├── media/
│   └── uploaded logos
└── README.md
```
## 🔗 Live URLs (Local)

- 🛠 **Admin Panel:** [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)
- 📄 **IPO Listings (UI):** [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- 🔌 **API Endpoint (GET/POST IPOs):** [http://127.0.0.1:8000/api/ipo/](http://127.0.0.1:8000/api/ipo/)

---

## 🧠 Author

**Abhiyanshu Anand**

- GitHub: [@Abhi110704](https://github.com/Abhi110704)
- Email: abhiyanshu1107@gmail.com

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
