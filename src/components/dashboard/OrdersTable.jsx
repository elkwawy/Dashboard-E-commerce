export default function OrdersTable() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Product</th>
              <th className="text-left py-3">Order ID</th>
              <th className="text-left py-3">Price</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">BDG Joey Full Length Wear</td>
              <td>#771230B</td>
              <td>$79.00</td>
              <td>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Paid
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}