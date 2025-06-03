# Auth

Auth is a full-stack authentication application built with React, Express, and MongoDB. It provides secure user registration, login, and session handling using HTTP-only cookies. The app supports dynamic subdomains like `<shopname>.localhost`, with seamless cross-subdomain authentication.

## 🌐 Live Demo

> https://shop-auth-840db.web.app

---

## 🚀 Features

- 🧑‍💼 **User Authentication**
  - Register and login functionality
  - Session token stored in HTTP-only cookies
  - Cross-subdomain

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Express.js, MongoDB (native driver)
- **Authentication**: Custom JWT-based system with HTTP-only cookies
- **Hosting**: Firebase for front-end & API for vercel

---

## 🧑‍💻 Installation Guide

### 1. Clone the repository

```bash
git clone https://github.com/sanjitgh/authorization-client-side.git
cd grentify
```

- **Note**: If you run it localhost, You need to change some configaration, insite the router.jsx file cheange !isSubdomain function just skip ! sign.