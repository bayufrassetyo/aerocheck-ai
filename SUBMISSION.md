# AeroCheck AI — Submission Notes

## Project Name

AeroCheck AI

## Tagline

Smart Operations Assistant for Aviation Maintenance Records

## Submission Category

- **Primary Category:** Business Ops — The Smart Boss
- **Supporting Category:** Productivity — The Time-Saver

---

## Problem

Aviation maintenance records are often complex, technical, and time-consuming to review manually. Important operational information—such as aircraft registration, ATA chapter, corrective action, release status, and urgency level—can easily be missed or overlooked when notes are written in unstructured or inconsistent formats.

This fragmentation leads to:

- **Slower documentation review** and backlogs in technical record entry.
- **Unclear follow-up priorities**, delaying critical maintenance tasks.
- **Increased operational risk** due to missed engineering and safety details.

---

## Target Users

AeroCheck AI is tailored for aircraft engineering and backend operations, specifically:

- Technical Record Staff
- Maintenance Planners
- Production Planning & Control (PPC) Teams
- Engineering Support Teams
- Aviation Operations Documentation Teams

---

## Solution

AeroCheck AI leverages Gemini AI to parse raw, unstructured aviation maintenance notes and instantly transform them into **structured operational insights**.

The application automatically generates a comprehensive decision-support payload containing:

- 📝 **Summary:** Concise operational overview.
- ⚠️ **Risk Profile:** Risk level classification (Low/Medium/High) along with logical reasoning.
- 🔍 **Key Findings:** Core technical issues discovered in the logs.
- 🚫 **Missing Information Check:** Automated detection of missing vital data (e.g., missing ATA chapter or release status).
- 🛠️ **Recommended Actions:** Actionable next steps for engineering teams.
- 📌 **Suggested Status:** Workflow state (Open, In Progress, Closed, Requires Follow-up).
- 📊 **Metadata:** UI-friendly tags and model confidence scores.

---

## Impact

By standardizing and accelerating data interpretation, AeroCheck AI helps aviation ops teams:

- ⚡ **Reduce Review Time:** Cut down manual logging and review overhead.
- 🎯 **Enhance Flight Safety:** Proactively identify unresolved risks and missing airworthiness documentation.
- 📉 **Minimize Human Error:** Standardize data outputs regardless of the technician's writing style.
- 🤝 **Improve Workflow Sync:** Generate clear follow-up tasks that seamlessly integrate into Maintenance, Repair, and Overhaul (MRO) schedules.

---

## Uniqueness / Wow Factor

Unlike generic AI chatbots, AeroCheck AI is purpose-built for a highly specialized industrial workflow. It reflects true domain insight from **Aviation Technical Record** and **Production Planning Control** logic.

Instead of just summarizing text, the application acts as an **automated data auditor and operational advisor**. It bridges the gap between raw maintenance logs and real-world MRO decision-making systems by translating technical jargon into structured, high-priority engineering insights.

---

## Gemini API Implementation

- **Core Engine:** Powered by the Gemini API via Google AI Studio.
- **System Prompting:** Configured with strict system instructions to behave as a Senior Aviation Maintenance Analyst, ensuring high-fidelity engineering nomenclature.
- **Structured Outputs:** Utilizes advanced prompt engineering to enforce a rigid JSON schema output from Gemini. This allows the React frontend to parse the data safely and render it into responsive, dashboard-style UI cards.
- **Error Resilience:** Equipped with clean fallback handling to manage unexpected input spikes or partial data logs seamlessly.

---

## Data Safety & Compliance

- **Fictionalized Datasets:** All demo cases and maintenance records provided within the app are strictly fictional and safe for public auditing.
- **Zero Proprietary Risk:** No real-world aircraft tail numbers, airline names, or confidential corporate data are used.

---

## Tech Stack

- **Frontend Framework:** React (Vite)
- **Styling & Icons:** Tailwind CSS, Lucide React
- **AI Integration:** Gemini API & Google AI Studio
- **DevOps & Hosting:** Docker, Google Cloud Run

---

## Final Pitch Summary

AeroCheck AI is a smart operations assistant designed to solve the complexity of unstructured aviation maintenance documentation. In an industry where documentation errors can impact safety and efficiency, manual review of inconsistent logs is a significant bottleneck.

AeroCheck AI addresses this by turning raw technical text into structured, actionable cards containing risk levels, missing info checks, and recommended steps. It empowers technical record and planning teams to work faster, miss fewer details, and make better operational decisions—combining domain expertise with the power of Gemini AI.

---

## Project Metadata URLs

- **Live Application URL:** [https://aerocheck-ai-1076823773310.asia-southeast2.run.app](https://aerocheck-ai-1076823773310.asia-southeast2.run.app)
- **GitHub Repository:** [https://github.com/bayufrassetyo/aerocheck-ai](https://github.com/bayufrassetyo/aerocheck-ai)
