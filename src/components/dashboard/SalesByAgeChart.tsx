import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const SalesByAgeChart: React.FC = () => {
  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Cleanup function
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  const data = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
    datasets: [
      {
        label: "Sales Amount",
        data: [15000, 28000, 32000, 24000, 18000, 12000],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(201, 203, 207, 0.8)",
        ],
        borderWidth: 0,
        maxBarThickness: 16,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: { raw: number }) => {
            return `$${context.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: (value: number) => {
            return "$" + value.toLocaleString();
          },
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create new chart
    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, options]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Sales by Age</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <canvas ref={canvasRef} />
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesByAgeChart;
