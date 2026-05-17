# AeroCheck AI

## Project Description

AeroCheck AI is a Gemini-powered aviation maintenance assistant that transforms unstructured maintenance notes into structured operational insights for faster decision-making.

**Smart Operations Assistant for Aviation Maintenance Records**

AeroCheck AI is a Gemini-powered aviation maintenance record assistant designed to help technical record staff, maintenance planners, and engineering support teams transform unstructured maintenance notes into clear operational insights.

This project was built for **#JuaraVibeCoding** under the **Business Ops — The Smart Boss** category, with a strong **Productivity — The Time-Saver** angle.

---

## Overview

Aviation maintenance records are often technical, inconsistent, and time-consuming to review manually. Critical information such as aircraft registration, ATA chapter, corrective actions, risk levels, and release status can be missed during manual review.

AeroCheck AI addresses this by converting raw maintenance notes into structured insights using Gemini AI.

AeroCheck AI bridges the gap between raw operational maintenance notes and decision-ready engineering intelligence.

The system transforms unstructured maintenance inputs into structured outputs that support faster and more consistent operational decision-making:

- Concise maintenance summary
- Risk level classification
- Key technical findings
- Missing information detection
- Recommended follow-up actions
- Suggested case status
- UI-friendly tags and confidence score

---

## Problem

In aviation maintenance workflows, technical records and maintenance notes are critical for operational clarity and follow-up decisions. However, raw notes can be long, incomplete, or written in inconsistent formats.

This may lead to:

- Slower documentation review
- Missed follow-up details
- Unclear risk prioritization
- Inconsistent reporting format
- More manual effort for technical record and planning teams

---

## Solution

AeroCheck AI transforms raw maintenance notes into structured operational insights using Gemini AI.

The application allows users to:

1. Select a fictional demo maintenance case.
2. Paste or write a custom maintenance note.
3. Analyze the note using Gemini AI.
4. View the result in structured cards.
5. Copy the analysis for documentation or follow-up.

---

## Key Features

- **AI Maintenance Note Analyzer**  
  Analyze raw aviation maintenance notes with Gemini AI.

- **Risk Level Detection**  
  Classify issues as Low, Medium, or High risk.

- **Missing Information Checker**  
  Detect missing details such as aircraft registration, ATA chapter, technician name, inspection time, corrective action, and release status.

- **Recommended Action Checklist**  
  Generate practical follow-up actions for maintenance teams.

- **Suggested Status**  
  Classify cases as Open, In Progress, Closed, or Requires Follow-up.

- **Demo Mode**  
  Includes fictional maintenance records so the app can be demonstrated even before custom input is tested.

- **Operational Dashboard**  
  Shows summary statistics, risk distribution, and recent demo cases.

- **Copy Analysis**  
  Allows users to copy structured analysis output.

---

## Why It Matters

As aviation operations become more data-driven, maintenance teams face increasing documentation workload. Tools like AeroCheck AI help reduce cognitive load and improve operational safety by standardizing how maintenance notes are interpreted.

---

## Triple-Threat Vibe Alignment

### 1. Problem

AeroCheck AI addresses a real business operations problem: aviation maintenance documentation can be complex, time-consuming, and prone to missed details during manual review.

### 2. Solution

The app provides a functional AI-powered workflow that turns unstructured maintenance notes into structured summaries, risk levels, missing information checks, and action checklists.

### 3. Uniqueness

Unlike generic AI chatbots, AeroCheck AI is designed around a specific aviation maintenance documentation workflow. It reflects domain insight from technical record and production planning control operations.

---

## Category

Primary category:

**Business Ops — The Smart Boss**

Supporting category:

**Productivity — The Time-Saver**

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React
- Gemini API
- Google AI Studio
- Cloud Run ready

---

## Project Structure

```text
aerocheck-ai/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Sections.jsx
│   │   ├── Analyzer.jsx
│   │   ├── Dashboard.jsx
│   │   ├── PolishSections.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   ├── maintenanceReports.js
│   │   └── demoAnalyses.js
│   │
│   ├── services/
│   │   └── geminiService.js
│   │
│   ├── utils/
│   │   └── analysisParser.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## Live Demo

AeroCheck AI is deployed on Google Cloud Run:

https://aerocheck-ai-1076823773310.asia-southeast2.run.app
