import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AnalyticsCardProps {
  title: string;
  value: string;
  change: string;
  changePrefix?: string;
  suffix?: string;
  isPositive?: boolean;
  hidePercentage?: boolean;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  change,
  changePrefix = "",
  suffix = "",
  isPositive = true,
  hidePercentage = false,
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold">
            {value}
            {suffix}
          </p>
          <div className="flex items-center space-x-1">
            <span
              className={`text-sm font-medium ${
                hidePercentage
                  ? "text-gray-500"
                  : isPositive
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {isPositive && !hidePercentage ? "+" : ""}
              {changePrefix}
              {change}
              {!hidePercentage && "%"}
            </span>
            <span className="text-sm text-gray-500">since last month</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
