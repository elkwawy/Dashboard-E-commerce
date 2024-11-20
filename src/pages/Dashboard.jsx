import { DashboardStats } from "../components/dashboard/DashboardStats";
import SalesChart from "../components/dashboard/SalesChart";
export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardStats />
      <SalesChart />
    </div>
  );
}
