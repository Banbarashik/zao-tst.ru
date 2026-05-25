import type { SFOComparativeAnalysisTablesData } from "@/types/SFOComparativeAnalysisTable";

export const SFOComparativeAnalysisTables: SFOComparativeAnalysisTablesData = {
  sfo16: {
    model: "СФО-16",
    modes: [
      {
        performance: "1 800 м³/час",
        thermalLoad: "satisfactory",
        heatingEfficiency: "максимальная - ΔT ≈ 20°C",
        heatingElementLife: "medium",
        overheatingRisk: "При tвх > -5°C",
        noiseAndVibration: "low",
      },
      {
        performance: "2 000 м³/час",
        thermalLoad: "good",
        heatingEfficiency: "оптимальная - ΔT ≈ 18°C",
        heatingElementLife: "high",
        overheatingRisk: "При tвх > +5°C",
        noiseAndVibration: "moderate",
      },
      {
        performance: "2 200 м³/час",
        thermalLoad: "excellent",
        heatingEfficiency: "умеренная - ΔT ≈ 16°C",
        heatingElementLife: "maximum",
        overheatingRisk: "При tвх > +15°C",
        noiseAndVibration: "high",
      },
    ],
  },

  sfo25: {
    model: "СФО-25",
    modes: [
      {
        performance: "1 700 - 2 000 м³/час",
        thermalLoad: "satisfactory",
        heatingEfficiency: "максимальная - ΔT ≈ 28°C",
        heatingElementLife: "medium",
        overheatingRisk: "При tвх > -5°C",
        noiseAndVibration: "low",
      },
      {
        performance: "2 300 м³/час",
        thermalLoad: "good",
        heatingEfficiency: "оптимальная - ΔT ≈ 25°C",
        heatingElementLife: "high",
        overheatingRisk: "При tвх > +10°C",
        noiseAndVibration: "moderate",
      },
      {
        performance: "2 500 м³/час",
        thermalLoad: "excellent",
        heatingEfficiency: "умеренная - ΔT ≈ 22°C",
        heatingElementLife: "maximum",
        overheatingRisk: "При tвх > +15°C",
        noiseAndVibration: "high",
      },
    ],
  },

  sfo40: {
    model: "СФО-40",
    modes: [
      {
        performance: "2 000 - 3 000 м³/час",
        thermalLoad: "satisfactory",
        heatingEfficiency: "максимальная - ΔT ≈ 40°C",
        heatingElementLife: "medium",
        overheatingRisk: "При tвх > 0°C",
        noiseAndVibration: "low",
      },
      {
        performance: "3 500 м³/час",
        thermalLoad: "good",
        heatingEfficiency: "оптимальная - ΔT ≈ 35°C",
        heatingElementLife: "high",
        overheatingRisk: "При tвх > +20°C",
        noiseAndVibration: "moderate",
      },
      {
        performance: "4 000 м³/час",
        thermalLoad: "excellent",
        heatingEfficiency: "умеренная - ΔT ≈ 30°C",
        heatingElementLife: "maximum",
        overheatingRisk: "При tвх > +35°C",
        noiseAndVibration: "high",
      },
    ],
  },

  sfo60: {
    model: "СФО-60",
    modes: [
      {
        performance: "3 000 - 4 000 м³/час",
        thermalLoad: "satisfactory",
        heatingEfficiency: "максимальная - ΔT ≈ 45°C",
        heatingElementLife: "medium",
        overheatingRisk: "При tвх > 0°C",
        noiseAndVibration: "low",
      },
      {
        performance: "5 000 м³/час",
        thermalLoad: "good",
        heatingEfficiency: "оптимальная - ΔT ≈ 35°C",
        heatingElementLife: "high",
        overheatingRisk: "При tвх > +20°C",
        noiseAndVibration: "moderate",
      },
      {
        performance: "5 500 м³/час",
        thermalLoad: "excellent",
        heatingEfficiency: "умеренная - ΔT ≈ 30°C",
        heatingElementLife: "maximum",
        overheatingRisk: "При tвх > +35°C",
        noiseAndVibration: "high",
      },
    ],
  },

  sfo100: {
    model: "СФО-100",
    modes: [
      {
        performance: "4 000 - 5 000 м³/час",
        thermalLoad: "satisfactory",
        heatingEfficiency: "максимальная - ΔT ≈ 50°C",
        heatingElementLife: "medium",
        overheatingRisk: "При tвх > 0°C",
        noiseAndVibration: "low",
      },
      {
        performance: "6 000 м³/час",
        thermalLoad: "good",
        heatingEfficiency: "оптимальная - ΔT ≈ 40°C",
        heatingElementLife: "high",
        overheatingRisk: "При tвх > +25°C",
        noiseAndVibration: "moderate",
      },
      {
        performance: "7 000 м³/час",
        thermalLoad: "excellent",
        heatingEfficiency: "умеренная - ΔT ≈ 35°C",
        heatingElementLife: "maximum",
        overheatingRisk: "При tвх > +40°C",
        noiseAndVibration: "high",
      },
    ],
  },

  sfo160: {
    model: "СФО-160",
    modes: [
      {
        performance: "6 000 - 8 000 м³/час",
        thermalLoad: "satisfactory",
        heatingEfficiency: "максимальная - ΔT ≈ 55°C",
        heatingElementLife: "medium",
        overheatingRisk: "При tвх > 0°C",
        noiseAndVibration: "low",
      },
      {
        performance: "9 000 - 11 000 м³/час",
        thermalLoad: "good",
        heatingEfficiency: "оптимальная - ΔT ≈ 45°C",
        heatingElementLife: "high",
        overheatingRisk: "При tвх > +25°C",
        noiseAndVibration: "moderate",
      },
      {
        performance: "12 000 м³/час",
        thermalLoad: "excellent",
        heatingEfficiency: "умеренная - ΔT ≈ 35°C",
        heatingElementLife: "maximum",
        overheatingRisk: "При tвх > +50°C",
        noiseAndVibration: "high",
      },
    ],
  },

  sfo250: {
    model: "СФО-250",
    modes: [
      {
        performance: "9 000 - 12 000 м³/час",
        thermalLoad: "satisfactory",
        heatingEfficiency: "максимальная - ΔT ≈ 60°C",
        heatingElementLife: "medium",
        overheatingRisk: "При tвх > 0°C",
        noiseAndVibration: "low",
      },
      {
        performance: "14 000 - 16 000 м³/час",
        thermalLoad: "good",
        heatingEfficiency: "оптимальная - ΔT ≈ 45°C",
        heatingElementLife: "high",
        overheatingRisk: "При tвх > +25°C",
        noiseAndVibration: "moderate",
      },
      {
        performance: "18 000 м³/час",
        thermalLoad: "excellent",
        heatingEfficiency: "умеренная - ΔT ≈ 35°C",
        heatingElementLife: "maximum",
        overheatingRisk: "При tвх > +45°C",
        noiseAndVibration: "high",
      },
    ],
  },
};
