import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pie } from "react-chartjs-2";

const SocialMediaCard: React.FC = () => {
  const data = {
    labels: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
    datasets: [
      {
        data: [35, 25, 22, 18],
        backgroundColor: ["#4285F4", "#1DA1F2", "#E1306C", "#0A66C2"],
        hoverBackgroundColor: ["#2A75F3", "#0D94E3", "#D91A5B", "#0559B3"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    cutout: "60%",
    maintainAspectRatio: false,
  };

  return (
    <Card className="shadow-sm border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Channels</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <Pie data={data} options={options} />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Conversion Rate</p>
            <p className="text-xl font-semibold">3.45%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Total Sales</p>
            <p className="text-xl font-semibold">$12,240</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialMediaCard;
