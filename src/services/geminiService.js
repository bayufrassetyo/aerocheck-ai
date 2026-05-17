import { GoogleGenAI } from "@google/genai";
import {
  getFallbackAnalysis,
  normalizeAnalysisResult,
  parseGeminiJsonResponse
} from "../utils/analysisParser";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = apiKey
  ? new GoogleGenAI({
      apiKey
    })
  : null;

export function buildMaintenancePrompt(maintenanceNote) {
  return `
You are AeroCheck AI, a professional aviation maintenance record assistant.

Your job is to analyze aviation maintenance notes and transform them into structured operational insights for technical record staff, maintenance planners, and engineering support teams.

The input may be incomplete, informal, or written as short operational notes. Analyze only the available information and clearly identify missing details.

Analyze the following aviation maintenance note:

${maintenanceNote}

Return only valid JSON using this exact structure:

{
  "summary": "A concise 2-3 sentence summary of the maintenance note.",
  "riskLevel": "Low, Medium, or High",
  "riskReason": "Brief reason why this risk level was selected.",
  "keyFindings": [
    "Finding 1",
    "Finding 2",
    "Finding 3"
  ],
  "missingInformation": [
    "Missing information 1",
    "Missing information 2",
    "Missing information 3"
  ],
  "recommendedActions": [
    "Action 1",
    "Action 2",
    "Action 3"
  ],
  "suggestedStatus": "Open, In Progress, Closed, or Requires Follow-up",
  "confidenceScore": 0,
  "uiTags": [
    "tag 1",
    "tag 2",
    "tag 3"
  ]
}

Risk classification guide:
- Low: Minor cabin, documentation, or non-critical issue already resolved or easy to monitor.
- Medium: Operational issue requiring inspection, monitoring, or follow-up but no immediate severe safety indication.
- High: Issue involving critical aircraft systems, flight controls, hydraulic system, fuel system, electrical system, pneumatic system, navigation system, or any unresolved condition before operation.

Status classification guide:
- Open: The issue has been reported but no corrective action is completed.
- In Progress: Inspection or troubleshooting has started but the final result is not completed.
- Closed: Corrective action has been completed and the note indicates satisfactory result.
- Requires Follow-up: The note indicates unresolved risk, missing release status, or further troubleshooting is required.

Important rules:
- Do not invent facts that are not present in the note.
- If aircraft registration is not provided, mark it as missing.
- If ATA chapter is not provided, mark it as missing.
- If technician name is not provided, mark it as missing.
- If inspection time is not provided, mark it as missing.
- If corrective action is not completed, mark it as missing or incomplete.
- If release status is not stated, mark it as missing.
- Use professional aviation maintenance documentation language.
- Keep summary maximum 2 sentences.
- keyFindings must contain exactly 3 items.
- missingInformation must contain maximum 5 items.
- recommendedActions must contain maximum 4 items.
- uiTags must contain maximum 4 short tags.
- Each list item must be concise and under 120 characters.
- confidenceScore must be a number between 0 and 100.
- Return only valid JSON.
- The first character of your response must be {
- The last character of your response must be }
- Do not include markdown.
- Do not include comments.
- Do not include explanations outside the JSON.
`.trim();
}

export async function analyzeMaintenanceNote(maintenanceNote) {
  if (!apiKey || !ai) {
    console.error("Gemini API key is missing.");
    return getFallbackAnalysis();
  }

  if (!maintenanceNote || !maintenanceNote.trim()) {
    console.error("Maintenance note is required.");
    return getFallbackAnalysis();
  }

  try {
    const prompt = buildMaintenancePrompt(maintenanceNote);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.2,
        topP: 0.8,
        maxOutputTokens: 2500,
        responseMimeType: "application/json"
      }
    });

    const rawText =
      typeof response.text === "function" ? response.text() : response.text;


    if (!rawText) {
      throw new Error("Empty Gemini response.");
    }

    const parsed = parseGeminiJsonResponse(rawText);


    if (!parsed) {
      throw new Error("Failed to parse Gemini JSON response.");
    }

    const normalized = normalizeAnalysisResult(parsed);


    if (!normalized) {
      throw new Error("Failed to normalize Gemini result.");
    }

    return normalized;
  } catch (error) {
    console.error("Gemini analysis failed:", error);
    return getFallbackAnalysis();
  }
}