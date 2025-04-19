import { Chart } from "chart.js/auto";
import type { ChartOptions } from "chart.js";

// Disable the auto registration of controllers, elements, scales and plugins
Chart.defaults.responsive = true;
Chart.defaults.maintainAspectRatio = false;

// Global chart options
export const defaultOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export default Chart;
