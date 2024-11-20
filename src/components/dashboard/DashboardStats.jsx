import { FiUsers ,FiPackage  } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { LuBarChart3 } from "react-icons/lu";
export function DashboardStats() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <div className="p-6 bg-white rounded-lg border shadow">
        <div className="flex  items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total User</p>
            <h3 className="text-2xl font-bold">40,689</h3>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <FiUsers className="h-6 w-6 text-blue-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-green-600">
          <span>↑ 4.6% Up from yesterday</span>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg border shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Order</p>
            <h3 className="text-2xl font-bold">10,293</h3>
          </div>
          <div className="bg-orange-100 p-3 rounded-full">
            <HiOutlineShoppingCart className="h-6 w-6 text-orange-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-green-600">
          <span>↑ 1.3% Up from past week</span>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg border shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
            <h3 className="text-2xl font-bold">$89,000</h3>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <LuBarChart3 className="h-6 w-6 text-green-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-red-600">
          <span>↓ 4.3% Down from yesterday</span>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg border shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Pending</p>
            <h3 className="text-2xl font-bold">2,040</h3>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <FiPackage className="h-6 w-6 text-purple-500" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-green-600">
          <span>↑ 1.8% Up from yesterday</span>
        </div>
      </div>
    </div>
  )
}