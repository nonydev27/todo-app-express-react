# todo-app-express-react
full-stack To-Do application built with an Express &amp; Joi REST API backend and a Vite + React frontend

# 📝 Full-Stack Task Tracker (Express REST API + React)

A full-stack To-Do application featuring a **Node.js/Express REST API** with schema validation and a lightweight **React + Vite** frontend interface.

---

## 🚀 Features

- **Full CRUD Operations:** Create, read, update, and delete tasks in real time.
- **RESTful API Architecture:** Standardized endpoints following HTTP verb conventions (`GET`, `POST`, `PUT`, `DELETE`).
- **Input Validation:** Backend validation using **Joi** to enforce payload structure and error responses.
- **Modern React Frontend:** Built with Vite for instant HMR (Hot Module Replacement) and efficient state management.
- **API Proxying:** Configured Vite dev server proxy to handle cross-origin requests seamlessly during development.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, Joi
- **Frontend:** React, Vite, JavaScript (ES6+)
- **Tools:** Git, GitHub

---

## 📁 Project Structure

```text
todo-app-rest/
├── backend/            # Express REST API
│   ├── server.js       # Main server file & routes
│   └── package.json
└── frontend/           # Vite + React Frontend
    ├── src/
    │   └── App.jsx     # Main React component & API fetching logic
    ├── vite.config.js  # Proxy settings
    └── package.json
