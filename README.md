# 🚍 MobilityFlow

MobilityFlow is a full-stack mobility planning application inspired by Mobility-as-a-Service (MaaS) platforms such as Västtrafik, Transit, and FlixBus.

The goal is to allow travelers to search for journeys between locations and compare different transportation options based on travel time, cost, and environmental impact.

---

## 📖 Project Idea

Modern travelers often need to compare multiple transport methods before deciding how to travel.

MobilityFlow aims to provide a simple and intuitive interface where users can:

- Search routes between two locations
- Compare transportation alternatives
- View travel details
- Compare journey costs
- Evaluate environmental impact
- Visualize routes on a map

The project is also intended as a portfolio project demonstrating modern full-stack development skills using React, ASP.NET Core, and PostgreSQL.

---

## 🎯 MVP Scope

The initial version focuses on the core user journey:

1. User enters an origin and destination
2. User searches for available routes
3. Results are displayed
4. Different route options can be compared

Future versions will integrate real transportation data and maps.

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- CSS

### Backend

- ASP.NET Core Web API
- C#

### Database

- PostgreSQL

### Planned Integrations

- Trafiklab API
- Leaflet
- OpenStreetMap

---

## ✅ Progress - Sprint 1

### Project Setup

- [x] Created React project using Vite
- [x] Created ASP.NET Core Web API
- [x] Configured project folder structure
- [x] Verified frontend and backend startup

### Frontend

- [x] Created Home page
- [x] Created Results page
- [x] Created Route Details page
- [x] Implemented React Router navigation

### Search Flow

- [x] Added origin input
- [x] Added destination input
- [x] Added search functionality
- [x] Passed route parameters through URL
- [x] Retrieved search parameters on Results page

### Components

- [x] Created reusable RouteCard component
- [x] Added route information
