type Mode = {
  performance: string;
  thermalLoad: "satisfactory" | "good" | "excellent";
  heatingEfficiency: string;
  heatingElementLife: "medium" | "high" | "maximum";
  overheatingRisk: string;
  noiseAndVibration: "low" | "moderate" | "high";
};

export type SFOComparativeAnalysisTableData = {
  model: string;
  modes: [Mode, Mode, Mode];
};

export interface SFOComparativeAnalysisTablesData {
  [key: string]: SFOComparativeAnalysisTableData;
}
