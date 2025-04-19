import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CountryData {
  country: string;
  countryCode: string;
  sales: number;
  bounceRate: number;
}

const countryData: CountryData[] = [
  {
    country: "United States",
    countryCode: "us",
    sales: 2500,
    bounceRate: 29.9,
  },
  { country: "Germany", countryCode: "de", sales: 1500, bounceRate: 22.4 },
  {
    country: "United Kingdom",
    countryCode: "gb",
    sales: 1200,
    bounceRate: 25.8,
  },
  { country: "Canada", countryCode: "ca", sales: 900, bounceRate: 27.7 },
  { country: "France", countryCode: "fr", sales: 800, bounceRate: 24.2 },
  { country: "Japan", countryCode: "jp", sales: 700, bounceRate: 18.6 },
  { country: "Australia", countryCode: "au", sales: 600, bounceRate: 23.5 },
];

const CountryTable: React.FC = () => {
  return (
    <Card className="shadow-sm border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Sales by Country</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Country</th>
                <th className="px-6 py-3">Sales</th>
                <th className="px-6 py-3">Bounce</th>
              </tr>
            </thead>
            <tbody>
              {countryData.map((item) => (
                <tr
                  key={item.countryCode}
                  className="bg-white border-b border-b-[#e5e3e3] hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium flex items-center">
                    <span className="inline-block w-6 h-4 mr-3 overflow-hidden rounded-sm border border-gray-200">
                      <img
                        src={`https://flagcdn.com/w40/${item.countryCode}.png`}
                        width="24"
                        height="16"
                        alt={item.country}
                        className="w-full h-full object-cover"
                      />
                    </span>
                    {item.country}
                  </td>
                  <td className="px-6 py-4">${item.sales.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="ml-2">{item.bounceRate}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountryTable;
