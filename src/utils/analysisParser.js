export function parseGeminiJsonResponse(input) {
  try {
    if (!input) {
      throw new Error("Empty Gemini response input.");
    }

    // Jika Gemini response sudah berupa object, langsung pakai.
    if (typeof input === "object") {
      return input;
    }

    const cleanedText = String(input)
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const jsonStart = cleanedText.indexOf("{");
    const jsonEnd = cleanedText.lastIndexOf("}");

    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("No JSON object found in Gemini response.");
    }

    const jsonString = cleanedText.slice(jsonStart, jsonEnd + 1);

    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    console.error("Original Gemini response:", input);
    return null;
  }
}

export function normalizeAnalysisResult(result) {
  if (!result || typeof result !== "object") {
    return null;
  }

  const normalizeRisk = (risk) => {
    const value = String(risk || "").toLowerCase();

    if (value.includes("high")) return "High";
    if (value.includes("medium")) return "Medium";
    if (value.includes("low")) return "Low";

    return "Medium";
  };

  const normalizeStatus = (status) => {
    const value = String(status || "").toLowerCase();

    if (value.includes("closed")) return "Closed";
    if (value.includes("progress")) return "In Progress";
    if (value.includes("follow")) return "Requires Follow-up";
    if (value.includes("open")) return "Open";

    return "Requires Follow-up";
  };

  const toArray = (value) => {
    if (Array.isArray(value)) return value;
    if (value === undefined || value === null || value === "") return [];
    return [String(value)];
  };

  const confidenceNumber = Number(result.confidenceScore);

  return {
    summary: result.summary || "No summary available.",
    riskLevel: normalizeRisk(result.riskLevel),
    riskReason: result.riskReason || "No risk reason provided.",
    keyFindings: toArray(result.keyFindings),
    missingInformation: toArray(result.missingInformation),
    recommendedActions: toArray(result.recommendedActions),
    suggestedStatus: normalizeStatus(result.suggestedStatus),
    confidenceScore: Number.isFinite(confidenceNumber)
      ? Math.min(100, Math.max(0, confidenceNumber))
      : 0,
    uiTags: toArray(result.uiTags).slice(0, 5)
  };
}

export function getFallbackAnalysis() {
  return {
    summary:
      "The maintenance note could not be fully analyzed. Please review the note manually and try again.",
    riskLevel: "Medium",
    riskReason:
      "A default medium risk level is assigned because the system could not complete a structured analysis.",
    keyFindings: [
      "The submitted maintenance note requires manual review.",
      "AI analysis was not completed successfully."
    ],
    missingInformation: [
      "Structured AI output is unavailable.",
      "Manual verification is required."
    ],
    recommendedActions: [
      "Review the maintenance note manually.",
      "Check whether all required maintenance information is available.",
      "Try running the analysis again."
    ],
    suggestedStatus: "Requires Follow-up",
    confidenceScore: 0,
    uiTags: ["Manual Review", "AI Error", "Follow-up Needed"]
  };
}