# AeroCheck AI — Submission Notes

## Project Name

AeroCheck AI

## Tagline

Smart Operations Assistant for Aviation Maintenance Records

## Category

Primary: Business Ops — The Smart Boss  
Supporting: Productivity — The Time-Saver

---

## Problem

Aviation maintenance records are often complex, technical, and time-consuming to review manually. Important information such as aircraft registration, ATA chapter, corrective action, release status, and urgency can be missed when notes are written in inconsistent formats.

This can slow down documentation review, create unclear follow-up priorities, and increase the risk of missed operational details.

---

## Target Users

- Technical Record Staff
- Maintenance Planner
- Production Planning Control
- Engineering Support Team
- Aviation operations documentation teams

---

## Solution

AeroCheck AI uses Gemini AI to analyze aviation maintenance notes and transform them into structured operational insights.

The app generates:

- Summary
- Risk level
- Risk reason
- Key findings
- Missing information
- Recommended actions
- Suggested status
- UI tags
- Confidence score

---

## Impact

AeroCheck AI helps teams:

- Review notes faster
- Identify unresolved risks
- Reduce missed information
- Standardize maintenance documentation output
- Generate clearer follow-up actions

---

## Uniqueness

Unlike generic AI chatbots, AeroCheck AI is built around a specific aviation maintenance documentation workflow. It is inspired by real technical record and production planning control processes.

The system simulates real aviation Maintenance, Repair & Operations (MRO) workflows by transforming unstructured technical logs into structured engineering decision-support outputs similar to real-world technical record systems.

---

## Gemini Usage

Gemini is used to analyze custom maintenance notes and return structured JSON output. This output is then rendered into user-friendly dashboard cards.

The AI output includes risk level classification, missing information detection, suggested status, and recommended follow-up actions.

The model is prompted to behave as an aviation maintenance analyst to ensure structured, consistent, and operationally relevant outputs.

---

## Demo Data

All maintenance records are fictional and safe for public demo purposes. No real aircraft data or company data is used.

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

## Final Pitch

AeroCheck AI is a smart operations assistant for aviation maintenance records.

The problem is that maintenance notes are often long, technical, and inconsistent, making manual review slower and increasing the risk of missed follow-up details.

With AeroCheck AI, users can select a demo maintenance case or paste a custom maintenance note. Gemini AI analyzes the note and returns a structured result, including summary, risk level, key findings, missing information, recommended actions, suggested status, confidence score, and tags.

This helps technical record and maintenance planning teams review notes faster, improve documentation clarity, and support better follow-up decisions.

---

## Live URL

https://aerocheck-ai-1076823773310.asia-southeast2.run.app

---

## GitHub Repository

https://github.com/bayufrassetyo/aerocheck-ai
