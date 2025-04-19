import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import SalesDashboard from "./pages/dashboard/SalesDashboard";
import AnalyticsDashboard from "./pages/dashboard/AnalyticsDashboard";

function App() {
  return (
    <>
      <Routes>
        {/* Redirect root to sales dashboard */}
        <Route path="/" element={<Navigate to="/dashboard/sales" replace />} />

        {/* Dashboard routes inside MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard/sales" element={<SalesDashboard />} />
          <Route path="dashboard/analytics" element={<AnalyticsDashboard />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<p>Page Not Found 404</p>} />
      </Routes>
    </>
  );
}

export default App;
