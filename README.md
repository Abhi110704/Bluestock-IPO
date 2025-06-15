# 📊 Bluestock IPO Listings

A modern, responsive Django web app to track, view, and manage Initial Public Offerings (IPOs). Built with PostgreSQL, Django REST Framework, and a custom-designed UI.

## 🎯 Features

- 🔍 Search and filter IPO listings
- 📱 Fully responsive on all devices
- 💾 Image upload support
- ⚡ Scroll animations using Animate.css
- ✨ Smooth transitions & minimal UI with a modern design
- ✅ Admin panel for managing IPOs

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS (custom), Animate.css
- **Backend:** Django 5.0, Django REST Framework
- **Database:** PostgreSQL
- **Hosting:** GitHub + Render (optional)
- **Other:** Pillow (for image uploads)

---

## 🖼️ Screenshot

![Bluestock UI Preview 1](https://github.com/Abhi110704/Bluestock-IPO/blob/main/Sample%20Project%20Files/Screenshot%202025-06-15%20203900.png?raw=true)
![Bluestock UI Preview 2](https://github.com/Abhi110704/Bluestock-IPO/blob/main/Sample%20Project%20Files/Screenshot%202025-06-15%20203918.png?raw=true)
![Bluestock UI Preview 3](https://github.com/Abhi110704/Bluestock-IPO/blob/main/Sample%20Project%20Files/Screenshot%202025-06-15%20203935.png?raw=true)
![Bluestock UI Preview 4](https://github.com/Abhi110704/Bluestock-IPO/blob/main/Sample%20Project%20Files/Screenshot%202025-06-15%20203946.png?raw=true)

---
## 🖼️ Postman API

![Postman API Preview 1](https://github.com/Abhi110704/Bluestock-IPO/blob/main/Sample%20Project%20Files/Screenshot%202025-06-15%20190855.png?raw=true)
![Postman API Preview 2](https://github.com/Abhi110704/Bluestock-IPO/blob/main/Sample%20Project%20Files/Screenshot%202025-06-15%20191149.png?raw=true)

---

## 🚀 Getting Started (Local Deployment)

Follow these steps to get your Bluestock IPO Listings app up and running on your local machine.

### 📝 Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Git:** For cloning the repository.
    *   [Download Git](https://git-scm.com/downloads)
*   **Python 3.x:** (e.g., Python 3.9 or newer) For running the Django application.
    *   [Download Python](https://www.python.org/downloads/)
*   **PostgreSQL:** The database server required for this project.
    *   [Download PostgreSQL](https://www.postgresql.org/download/)

### 🧩 Setup Instructions (for Windows CMD)

1.  **Clone the repository:**

    Open your Command Prompt (CMD) and run:
    ```cmd
    git clone https://github.com/Abhi110704/bluestock-ipo.git
    cd bluestock-ipo
    ```

2.  **Create a virtual environment and activate it:**

    It's recommended to use a virtual environment to manage project dependencies.
    ```cmd
    python -m venv venv
    .\venv\Scripts\activate
    ```
    (You should see `(venv)` at the beginning of your command prompt line, indicating the virtual environment is active.)

3.  **Install project dependencies:**

    Install all required Python packages listed in `requirements.txt`:
    ```cmd
    pip install -r requirements.txt
    ```

4.  **Set up your PostgreSQL database:**

    *   **Ensure your PostgreSQL server is running.**
    *   **Create a new database** for the project (e.g., `ipo_db`) and a user with appropriate permissions. You can do this using `psql` (PostgreSQL command-line client) or a GUI tool like pgAdmin. For example, using `psql`:
        ```sql
        CREATE DATABASE ipo_db;
        CREATE USER youruser WITH PASSWORD 'yourpassword';
        ALTER ROLE youruser SET client_encoding TO 'utf8';
        ALTER ROLE youruser SET default_transaction_isolation TO 'read committed';
        ALTER ROLE youruser SET timezone TO 'UTC';
        GRANT ALL PRIVILEGES ON DATABASE ipo_db TO youruser;
        ```
    *   **Create a `.env` file** in the `bluestock-ipo` root directory (where `manage.py` is located) with your database connection details. Replace `youruser`, `yourpassword`, and `ipo_db` with your actual PostgreSQL credentials and database name.

        ```env
        DATABASE_URL=postgres://youruser:yourpassword@localhost:5432/ipo_db
        ```

5.  **Run database migrations:**

    This will set up the necessary tables in your `ipo_db` database.
    ```cmd
    python manage.py makemigrations
    python manage.py migrate
    ```

6.  **Start the Django development server:**

    Your application will be accessible in your web browser.
    ```cmd
    python manage.py runserver
    ```

7.  **Create a superuser (optional):**

    To access the Django admin panel and manage IPOs, create an administrator account:
    ```cmd
    python manage.py createsuperuser
    ```
    (Follow the prompts to set up your username, email, and password.)

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

- 🛠 **Admin Panel:**                   [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)
- 📄 **IPO Listings (UI):**            [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- 🔌 **API Endpoint (GET/POST IPOs):** [http://127.0.0.1:8000/api/ipo/](http://127.0.0.1:8000/api/ipo/)

---

## 🧠 Author

**Abhiyanshu Anand**

- GitHub: [@Abhi110704](https://github.com/Abhi110704)
- Email: abhiyanshu1107@gmail.com

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
