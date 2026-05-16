export const demoAnalyses = {
  "MNT-001": {
    summary:
      "Aircraft PK-AXA experienced intermittent hydraulic pressure drop during pre-flight inspection. No external leakage was found during visual inspection, but further troubleshooting is required before the next scheduled operation.",
    riskLevel: "High",
    riskReason:
      "The issue involves the hydraulic system and remains unresolved before the next operation.",
    keyFindings: [
      "Intermittent hydraulic pressure drop was reported during pre-flight inspection.",
      "No external leakage was found during visual inspection.",
      "Further troubleshooting is required before the next scheduled operation."
    ],
    missingInformation: [
      "Technician name is not provided.",
      "Inspection time is not provided.",
      "Corrective action has not been completed.",
      "Final aircraft release status is not stated."
    ],
    recommendedActions: [
      "Perform hydraulic system pressure test.",
      "Inspect hydraulic pump, valves, lines, and related components.",
      "Record troubleshooting findings in the maintenance log.",
      "Escalate the case to maintenance planning before the next operation."
    ],
    suggestedStatus: "Requires Follow-up",
    confidenceScore: 92,
    uiTags: ["Hydraulic", "High Risk", "Pre-flight", "Follow-up Needed"]
  },

  "MNT-002": {
    summary:
      "Aircraft PK-BRA showed uneven wear on the nose landing gear tire during routine inspection. Tire pressure was within normal range, but monitoring and possible replacement are recommended if wear exceeds the limit.",
    riskLevel: "Medium",
    riskReason:
      "The issue involves landing gear tire condition and requires monitoring, but no immediate critical failure is indicated.",
    keyFindings: [
      "Uneven wear was found on the nose landing gear tire.",
      "Tire pressure was within normal range.",
      "Possible replacement may be required if the wear exceeds the maintenance limit."
    ],
    missingInformation: [
      "Exact tire wear measurement is not provided.",
      "Inspection time is not provided.",
      "Technician name is not provided.",
      "Final replacement decision is not stated."
    ],
    recommendedActions: [
      "Measure and record tire wear against maintenance limits.",
      "Continue monitoring tire condition during next inspection.",
      "Prepare replacement plan if the tire wear exceeds the allowable limit.",
      "Update the maintenance record with final disposition."
    ],
    suggestedStatus: "In Progress",
    confidenceScore: 88,
    uiTags: ["Landing Gear", "Medium Risk", "Inspection", "Monitoring"]
  },

  "MNT-003": {
    summary:
      "Aircraft PK-CDA had intermittent flickering on forward cabin lighting reported by cabin crew. The circuit breaker remained engaged, but electrical inspection is required to identify a possible wiring or power supply issue.",
    riskLevel: "High",
    riskReason:
      "The issue involves the electrical system and requires further inspection to determine the root cause.",
    keyFindings: [
      "Forward cabin lighting flickering was reported.",
      "The circuit breaker remained engaged.",
      "Electrical inspection is required to identify possible wiring or power supply issue."
    ],
    missingInformation: [
      "Exact location of affected lighting unit is not fully detailed.",
      "Technician name is not provided.",
      "Inspection time is not provided.",
      "Corrective action result is not stated."
    ],
    recommendedActions: [
      "Perform electrical system inspection on the affected cabin lighting circuit.",
      "Check wiring continuity and connector condition.",
      "Verify power supply stability to the forward cabin lighting.",
      "Record inspection findings and corrective action in the maintenance log."
    ],
    suggestedStatus: "Requires Follow-up",
    confidenceScore: 90,
    uiTags: ["Electrical", "High Risk", "Cabin Lighting", "Inspection Needed"]
  },

  "MNT-004": {
    summary:
      "Aircraft PK-DEN had a passenger cabin temperature condition reported as warmer than normal during boarding. No cockpit fault message was displayed, but the air conditioning pack operation needs to be checked.",
    riskLevel: "Medium",
    riskReason:
      "The issue affects cabin comfort and requires inspection, but no immediate critical warning was reported.",
    keyFindings: [
      "Passenger cabin temperature was warmer than normal during boarding.",
      "Air conditioning pack operation needs to be checked.",
      "No fault message was displayed on the cockpit panel."
    ],
    missingInformation: [
      "Actual cabin temperature value is not provided.",
      "Technician name is not provided.",
      "Inspection time is not provided.",
      "Corrective action is not stated."
    ],
    recommendedActions: [
      "Check air conditioning pack operation.",
      "Verify cabin temperature sensor readings.",
      "Perform operational test of the air conditioning system.",
      "Update the maintenance record with troubleshooting result."
    ],
    suggestedStatus: "Open",
    confidenceScore: 84,
    uiTags: ["Air Conditioning", "Medium Risk", "Cabin Comfort", "Open"]
  },

  "MNT-005": {
    summary:
      "Aircraft PK-EVO had slight resistance reported during elevator control check. No abnormal indication was displayed, but maintenance inspection is required before aircraft release.",
    riskLevel: "High",
    riskReason:
      "The issue involves flight controls and must be inspected before aircraft release.",
    keyFindings: [
      "Pilot reported slight resistance during elevator control check.",
      "No abnormal indication was displayed.",
      "Maintenance inspection is required before aircraft release."
    ],
    missingInformation: [
      "Technician name is not provided.",
      "Inspection time is not provided.",
      "Detailed troubleshooting result is not provided.",
      "Final aircraft release status is not stated."
    ],
    recommendedActions: [
      "Perform elevator control system inspection.",
      "Check control linkage, cable tension, and related components.",
      "Conduct functional check after inspection.",
      "Do not release aircraft until inspection result is documented."
    ],
    suggestedStatus: "Requires Follow-up",
    confidenceScore: 95,
    uiTags: ["Flight Control", "High Risk", "Pilot Report", "Release Hold"]
  },

  "MNT-006": {
    summary:
      "Aircraft PK-FLY had a loose tray table latch on seat 12A. Cabin maintenance adjusted the latch mechanism and confirmed normal operation after functional check.",
    riskLevel: "Low",
    riskReason:
      "The issue is a minor cabin equipment defect and corrective action has been completed successfully.",
    keyFindings: [
      "Seat 12A tray table latch was loose.",
      "Cabin maintenance adjusted the latch mechanism.",
      "Functional check confirmed normal operation."
    ],
    missingInformation: [
      "Technician name is not provided.",
      "Inspection time is not provided."
    ],
    recommendedActions: [
      "Record completed corrective action in the maintenance log.",
      "Monitor the latch condition during future cabin checks.",
      "Close the case if documentation requirements are complete."
    ],
    suggestedStatus: "Closed",
    confidenceScore: 91,
    uiTags: ["Cabin", "Low Risk", "Corrected", "Closed"]
  },

  "MNT-007": {
    summary:
      "Aircraft PK-GMA showed inconsistent fuel quantity indication on the left tank during ground check. No fuel leakage was observed, but further sensor and wiring inspection is required.",
    riskLevel: "High",
    riskReason:
      "The issue involves the fuel system indication and remains under investigation.",
    keyFindings: [
      "Fuel quantity indication on the left tank showed inconsistent reading.",
      "No fuel leakage was observed.",
      "Further sensor and wiring inspection is required."
    ],
    missingInformation: [
      "Exact indication value is not provided.",
      "Technician name is not provided.",
      "Inspection time is not provided.",
      "Final troubleshooting result is not stated."
    ],
    recommendedActions: [
      "Inspect left tank fuel quantity sensor.",
      "Check related wiring and connector condition.",
      "Perform fuel indication system test.",
      "Document troubleshooting findings before final release decision."
    ],
    suggestedStatus: "In Progress",
    confidenceScore: 93,
    uiTags: ["Fuel System", "High Risk", "Ground Check", "In Progress"]
  },

  "MNT-008": {
    summary:
      "Aircraft PK-HVN experienced intermittent GPS signal loss during approach. A system reset restored normal indication, but avionics diagnostic check is requested.",
    riskLevel: "Medium",
    riskReason:
      "The navigation issue was temporarily restored after reset, but diagnostic follow-up is still required.",
    keyFindings: [
      "Intermittent GPS signal loss was reported during approach.",
      "System reset restored normal indication.",
      "Avionics team requested diagnostic check."
    ],
    missingInformation: [
      "Exact duration of GPS signal loss is not provided.",
      "Technician name is not provided.",
      "Diagnostic result is not stated.",
      "Final release status is not stated."
    ],
    recommendedActions: [
      "Perform avionics diagnostic check.",
      "Review GPS receiver fault history if available.",
      "Verify navigation system performance after reset.",
      "Document diagnostic result in the maintenance record."
    ],
    suggestedStatus: "Open",
    confidenceScore: 86,
    uiTags: ["Navigation", "Medium Risk", "GPS", "Diagnostic"]
  },

  "MNT-009": {
    summary:
      "Aircraft PK-IDA had bleed air pressure fluctuation observed during engine ground run. No abnormal smell or cockpit warning was reported, but pneumatic valves and related ducting need inspection.",
    riskLevel: "Medium",
    riskReason:
      "The pneumatic system requires inspection, but no cockpit warning or abnormal smell was reported.",
    keyFindings: [
      "Bleed air pressure fluctuation was observed during engine ground run.",
      "No abnormal smell was reported.",
      "No cockpit warning was reported.",
      "Pneumatic valves and related ducting need inspection."
    ],
    missingInformation: [
      "Exact pressure fluctuation value is not provided.",
      "Technician name is not provided.",
      "Inspection time is not provided.",
      "Corrective action result is not stated."
    ],
    recommendedActions: [
      "Inspect pneumatic valves.",
      "Check related ducting for leakage or restriction.",
      "Perform pneumatic system operational test.",
      "Record findings and corrective action in the maintenance log."
    ],
    suggestedStatus: "Open",
    confidenceScore: 87,
    uiTags: ["Pneumatic", "Medium Risk", "Ground Run", "Inspection"]
  },

  "MNT-010": {
    summary:
      "Aircraft PK-JVA had a stiff aft service door handle during cabin preparation. Lubrication was performed and functional check was completed with satisfactory result.",
    riskLevel: "Low",
    riskReason:
      "The issue is a minor door handling condition and corrective action has been completed successfully.",
    keyFindings: [
      "Aft service door handle felt stiff during cabin preparation.",
      "Lubrication was performed.",
      "Functional check was completed with satisfactory result."
    ],
    missingInformation: [
      "Technician name is not provided.",
      "Inspection time is not provided."
    ],
    recommendedActions: [
      "Record lubrication and functional check result in the maintenance log.",
      "Monitor the door handle condition during future service checks.",
      "Close the case if all documentation requirements are complete."
    ],
    suggestedStatus: "Closed",
    confidenceScore: 90,
    uiTags: ["Door System", "Low Risk", "Corrected", "Closed"]
  }
};