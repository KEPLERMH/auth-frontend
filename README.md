# 🔐 Auth User Frontend

Frontend de aplicación de autenticación construido con **React + Vite + React Router + React Hook Form + Axios**.

Este proyecto maneja:

- Registro de usuario
- Login
- Persistencia de sesión con cookies httpOnly
- Verificación automática de sesión (`/me`)
- Renderizado condicional según estado autenticado
- Arquitectura limpia con layouts

---

## 🚀 Tecnologías

- React
- Vite
- React Router DOM
- React Hook Form
- Axios
- TailwindCSS

---

## 📁 Estructura del Proyecto

```
src/
 ├── components/
 │     ├── Navbar.jsx
 │     ├── FormInput.jsx
 │
 ├── layouts/
 │     ├── AuthLayout.jsx
 │
 ├── pages/
 │     ├── Home.jsx
 │     ├── Login.jsx
 │     ├── Register.jsx
 │
 ├── services/
 │     ├── api.js
 │     ├── authService.js
 │
 ├── App.jsx
 ├── main.jsx
```

---

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/KEPLERMH/auth-frontend.git
cd auth-frontend
```

Instalar dependencias:

```bash
npm install
```

---

## 🧪 Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```
VITE_API_URL=http://localhost:5000
```

En producción:

```
VITE_API_URL=https://tu-backend.com
```

⚠️ Todas las variables deben comenzar con `VITE_`.

---

## ▶️ Ejecutar en Desarrollo

```bash
npm run dev
```

El proyecto correrá en:

```
http://localhost:5173
```

---

## 🔐 Autenticación

La aplicación utiliza cookies httpOnly para mantener la sesión.

Flujo:

1. Usuario hace login
2. Backend envía cookie con JWT
3. Frontend ejecuta `GET /api/auth/me`
4. Si el token es válido → `setUser(user)`
5. Navbar renderiza según estado

Axios está configurado con:

```js
axios.defaults.withCredentials = true;
```

Para permitir el envío de cookies en requests cross-origin.

---

## 🌍 Deploy

Recomendado para producción:

Frontend:

- Vercel
- Netlify

Backend:

- Railway
- Render

Recordar actualizar:

- `VITE_API_URL`
- Configuración CORS del backend
- `sameSite: "none"` y `secure: true` en producción

---

## 🛠 Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run preview  # Preview del build
```

---

## 📌 Notas Importantes

- No almacenar tokens en localStorage
- La cookie es manejada automáticamente por el navegador
- El estado de autenticación se reconstruye al recargar mediante `/me`
- Usar HTTPS en producción

---

## 📄 Licencia

Proyecto educativo de práctica de autenticación con React y Node.js.
