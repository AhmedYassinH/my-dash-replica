import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const RevenueChart: React.FC = () => {
  const chartRef = useRef<ChartJS | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const data: ChartData<"line"> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Facebook Ads",
        data: [
          4500, 5200, 4800, 5800, 6000, 7000, 6500, 7500, 8000, 8200, 9000,
          9500,
        ],
        borderColor: "rgba(66, 133, 244, 1)",
        backgroundColor: "rgba(66, 133, 244, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
      {
        label: "Google Ads",
        data: [
          3800, 4300, 4100, 5000, 5400, 6200, 5900, 6800, 7200, 7500, 8100,
          8700,
        ],
        borderColor: "rgba(219, 68, 55, 1)",
        backgroundColor: "rgba(219, 68, 55, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        type: "category",
        grid: {
          display: false,
        },
      },
      y: {
        type: "linear",
        grid: {
          display: false,
        },
      },
    },
    hover: {
      mode: "index",
      intersect: false,
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
      chartRef.current = new ChartJS(ctx, {
        type: "line",
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

  const totalFacebookAds = data.datasets[0].data.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
  const totalGoogleAds = data.datasets[1].data.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
  const totalRevenue = totalFacebookAds + totalGoogleAds;

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Revenue</CardTitle>
        <div className="text-sm text-muted-foreground">
          Total: {formatCurrency(totalRevenue)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <canvas ref={canvasRef} />
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">
              Facebook Ads
            </div>
            <div className="text-lg font-semibold">
              {formatCurrency(totalFacebookAds)}
            </div>
            <div className="text-xs text-green-500">
              +{Math.round((totalFacebookAds / totalRevenue) * 100)}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">
              Google Ads
            </div>
            <div className="text-lg font-semibold">
              {formatCurrency(totalGoogleAds)}
            </div>
            <div className="text-xs text-green-500">
              +{Math.round((totalGoogleAds / totalRevenue) * 100)}%
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
