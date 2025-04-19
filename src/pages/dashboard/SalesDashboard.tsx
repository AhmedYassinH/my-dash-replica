import React from "react";
import SocialMediaCard from "@/components/dashboard/SocialMediaCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import SalesByAgeChart from "@/components/dashboard/SalesByAgeChart";
import CountryTable from "@/components/dashboard/CountryTable";
import AnalyticsCard from "@/components/dashboard/AnalyticsCard";

const SalesDashboard: React.FC = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-6">Sales Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <AnalyticsCard
          title="Sales"
          value="$230,220"
          change="55"
          isPositive={true}
        />
        <AnalyticsCard
          title="Customers"
          value="3,200"
          change="12"
          isPositive={true}
        />
        <AnalyticsCard
          title="Avg. Revenue"
          value="$1,200"
          change="213"
          changePrefix="$"
          hidePercentage={true}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="md:order-1">
          <SocialMediaCard />
        </div>
        <div className="md:order-2">
          <RevenueChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SalesByAgeChart />
        <CountryTable />
      </div>
    </div>
  );
};

export default SalesDashboard;
