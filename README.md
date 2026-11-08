# MobilityFlow

## Overview

MobilityFlow is a mobility decision platform that helps users choose the best way to travel based on their priorities.

Unlike traditional route planners that only display routes, MobilityFlow compares transportation options across cost, travel time, accessibility, reliability, and sustainability to recommend the optimal journey.

---

## Problem

Travelers often need to compare multiple transportation providers and apps to determine the best way to reach their destination.

Current journey planners answer:

> "How can I get there?"

MobilityFlow answers:

> "What is the best option for me?"

---

## Solution

Users search for a journey and receive a comparison of available transportation options, including:

- Travel time
- Estimated cost
- Accessibility information
- Sustainability score (CO₂ impact)
- Transport type(s)

Based on user preferences, MobilityFlow recommends the most suitable journey.

---

## MVP Features

### Journey Search
Search between an origin and destination.

### Route Comparison
Compare transportation options side-by-side.

### User Preferences
Prioritize:
- Cheapest
- Fastest
- Greenest
- Most Accessible

### Smart Recommendation
Receive a recommended journey with a clear explanation of why it was selected.

---

## Example

**Journey:** Göteborg → Stockholm

### Recommended Option: MTRX Train

- Cost: 349 SEK
- Travel Time: 3h 12m
- Accessibility: Fully Accessible
- CO₂: Low Emissions

**Why Recommended?**
- Within budget
- Lowest environmental impact
- Fully accessible
- Arrives before requested arrival time

---

## Tech Stack

### Frontend
- React
- React Router
- CSS

### Backend
- ASP.NET Core Web API

### Data
- Mock transportation data (MVP)
- Real transport integrations planned for future releases

---

## Future Development

- MaaS (Mobility as a Service) integrations
- Ticket booking
- Mobility wallet
- Real-time service disruptions
- Historical reliability analysis
- User accounts and saved journeys

---

## Vision

MobilityFlow transforms journey planning into decision-making by helping users choose the transportation option that best fits their needs, budget, accessibility requirements, and sustainability goals.
