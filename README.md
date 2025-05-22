# 📝 Авторский блог

🚀 **Краткое описание**:  
Полнофункциональное SPA-приложение для публикации статей, комментариев и взаимодействия между пользователями с ролями. Реализовано на основе **React + Redux Toolkit + TypeScript** с мок-бэкендом через **JSON Server**.

## 🌟 Основные функции

-   🔐 **Аутентификация и регистрация**
-   👥 **Роли пользователей**: Администратор, Модератор, Читатель, Гость (неавторизованный)
-   ✍️ **CRUD для статей** (с картинками, пагинацией и поиском)
-   💭 **Комментарии** (с модерацией)
-   👨‍💻 **Модерация и управление пользователями** (для администратора)
-   🖥️ **Полноценный Desktop-интерфейс** на `styled-components`

## ⚙️ Технологии

### 🖥️ Frontend

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![React Router](https://img.shields.io/badge/React_Router-7.4-CC2927?logo=react-router)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.6-764ABC?logo=redux)
![React Redux](https://img.shields.io/badge/React_Redux-9.2-764ABC?logo=redux)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1-DB7093?logo=styled-components)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.54-EC5990?logo=react-hook-form)
![Yup](https://img.shields.io/badge/Yup-1.6-4285F4?logo=yup)

### 🗄️ Backend (Mock)

![JSON Server](https://img.shields.io/badge/JSON_Server-0.17.4-grey?logo=json)

### 🛠️ Dev Tools & Utils

![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![ESLint](https://img.shields.io/badge/ESLint-9.21-4B32C3?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-Code_Formatter-F7B93E?logo=prettier)

## 🖼 Примеры интерфейса

### 1. Главная страница

-   Поисковая строка с автофильтрацией
-   Сетка карточек статей с превью
-   Пагинация (динамическая подгрузка)
-   Адаптивный хедер с навигацией

![Главная](image-main.png)

### 2. Страница статьи

-   Полный текст статьи с изображением
-   Секция комментариев (CRUD для модераторов)
-   Форма добавления комментария
-   Кнопки управления для администратора

![Статья](image-post.png)

### 3. Панель администратора

-   Таблица пользователей
-   Изменение ролей (выпадающие списки)
-   Инструменты модерации

![Админка](image-admin.png)

### 4. Формы авторизации

-   Вход/регистрация с валидацией
-   Визуальная индикация ошибок
-   Адаптивный дизайн

![Авторизация](image-login.png)

## 🛠 Установка и запуск

1. Клонировать репозиторий:

```bash
git clone https://github.com/IliaStarodubov/blog.git
```

2. Установка зависимостей

```bash
npm install
```

3. Запуск React-приложения и запуск json-server

```bash
npm run dev # Запуск фронтенда
npm run DB  # Запуск JSON-сервера
```
