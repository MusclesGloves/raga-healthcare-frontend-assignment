# RagaAI Healthcare Frontend Assignment

A modern healthcare operations dashboard built with **React + TypeScript + Zustand + Firebase Authentication**, designed as a modular frontend application for clinical operations, patient monitoring, analytics, and alerting workflows.

## Live Demo

**Live URL:** `https://raga-healthcare-frontend-assignment-601nuz9hc.vercel.app`

## GitHub Repository

**Repository:** `https://github.com/MusclesGloves/raga-healthcare-frontend-assignment`

---

## Overview

This project was built as part of the **RagaAI Frontend Developer Assignment**.

The application simulates a healthcare SaaS platform with:

- Firebase email/password authentication
- protected and public route handling
- operational dashboard
- analytics dashboard
- patient details module with grid/list view
- in-app and browser notification workflows
- scalable feature-based architecture
- reusable UI components
- performance-oriented route lazy loading

The goal was not only to complete the required screens, but also to structure the project in a way that is maintainable, reusable, and ready to scale.

---

## Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **Zustand**
- **Firebase Authentication**
- **Tailwind CSS**
- **Lucide React**

---

## Demo Credentials

Use the following test account to log in and evaluate the application:

- **Email:** `test@gmail.com`
- **Password:** `Test@123`

> Registration/signup is not included because it was not part of the assignment requirements.

---

## Features Implemented

## 1. Authentication

Implemented using **Firebase Authentication** with email/password login.

### Includes

- login form
- Firebase authentication integration
- protected route handling
- public route handling
- authenticated redirect flow
- persisted session handling using Firebase auth state listener
- logout functionality

### Notes

The assignment required **login functionality**, so signup/registration was intentionally not added.

---

## 2. Shared App Shell

A reusable application shell wraps all protected routes and provides:

- sidebar navigation
- active route highlighting
- dynamic route-aware patient tab selection
- signed-in user section
- logout support
- notification bell with unread count

This makes the app behave like a real multi-page SaaS interface rather than a collection of isolated pages.

---

## 3. Dashboard Page

The dashboard is implemented as a healthcare command center view.

### Includes

- operations overview hero section
- healthcare KPI stat cards
- recent patient activity feed
- critical alerts panel
- appointment summary cards
- department utilization section
- refresh interaction using Zustand-managed mock state

---

## 4. Analytics Page

The analytics module presents healthcare operational insights and performance summaries.

### Includes

- KPI metric cards
- clinical throughput trend comparison
- department performance section
- care insights section
- analytics refresh interaction using Zustand-managed mock data

---

## 5. Patient Details Module

This is one of the key assignment requirements and has been fully implemented.

### Includes

- patient data modeling
- realistic mock patient dataset
- Zustand-powered patient state
- route-driven patient selection using `:patientId`
- **grid view**
- **list view**
- toggle between grid and list
- detailed patient summary banner
- vitals section
- medication plan
- recent visits
- invalid patient route fallback handling

### Routes

- `/patients/1`
- `/patients/2`
- `/patients/3`
- `/patients/4`

The sidebar remains active for all patient routes using path-aware navigation logic.

---

## 6. Notifications + Service Worker Support

Implemented with **in-app notifications**, **browser notifications**, and **service worker registration**.

### Includes

- Zustand notification store
- notification panel UI
- unread badge count
- mark all as read
- demo healthcare alert trigger
- browser notification permission flow
- service worker registration
- browser notification dispatch through service worker when permission is granted

This satisfies the assignment requirement around notification/service worker support with a working healthcare-focused use case.

---

## Routing Structure

### Public

- `/` → Login page

### Protected

- `/dashboard` → Dashboard
- `/analytics` → Analytics
- `/patients/:patientId` → Patient Details

### Fallback

- `*` → Not Found page

---

## Project Structure

```text
src/
├── app/
├── assets/
├── components/
│   ├── common/
│   └── layout/
├── constants/
├── features/
│   ├── analytics/
│   ├── auth/
│   ├── dashboard/
│   ├── notifications/
│   └── patients/
├── hooks/
├── lib/
├── pages/
├── routes/
├── services/
├── types/
├── utils/
├── App.tsx
├── index.css
└── main.tsx