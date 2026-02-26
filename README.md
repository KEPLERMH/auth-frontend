# 🔐 Auth User

Frontend de aplicación de autenticación construido con **React + Vite + React Router + React Hook Form + Axios**.

Esta aplicación se conecta a un backend en producción y a una base de datos PostgreSQL en la nube.

---

## 🚀 Tecnologías

### Frontend

- React
- Vite
- React Router DOM
- React Hook Form
- Axios
- TailwindCSS

### Backend

- Node.js
- Express
- JWT (Autenticación)
- Deployado en **Render**

### Base de Datos

- PostgreSQL
- Hosting en **Neon (Postgres Serverless)**

---

## 🌍 Arquitectura en Producción

```
Frontend (Vercel)
        ↓
Backend (Render)
        ↓
Database (Neon - PostgreSQL)
```

### 🔹 Frontend

Deployado en Vercel.

### 🔹 Backend

API REST construida con Node.js y Express.
Deployada en Render.

### 🔹 Base de Datos

PostgreSQL alojado en Neon.

---

## 📁 Estructura del Proyecto

```
src/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── services/
 ├── App.jsx
 ├── main.jsx
```

---

## ⚙️ Instalación Local

Clonar repositorio:

```bash
git clone https://github.com/KEPLERMH/auth-frontend.git
cd auth-frontend
```

Instalar dependencias:

```bash
npm install
```

Crear archivo `.env`:

```
VITE_API_URL=http://localhost:5000
```

Ejecutar:

```bash
npm run dev
```

---

## 🔐 Autenticación

La aplicación usa:

- Cookies httpOnly
- JWT firmados en backend
- Verificación automática mediante `/api/auth/me`
- Persistencia de sesión entre recargas

Axios está configurado con:

```js
axios.defaults.withCredentials = true;
```

---

## 🛠 Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run preview  # Preview del build
```

---

## 📌 Notas Importantes

- El frontend no almacena tokens en localStorage.
- La autenticación se maneja con cookies seguras.
- En producción se usa:
  - `sameSite: "none"`
  - `secure: true`

- CORS está configurado para permitir comunicación entre Vercel y Render.

---

## 🎯 Estado del Proyecto

Proyecto fullstack listo para producción con:

- Deploy en la nube
- Base de datos externa
- Autenticación segura
- Arquitectura moderna

---

Proyecto desarrollado con fines educativos y prácticos para implementación real de autenticación fullstack.
