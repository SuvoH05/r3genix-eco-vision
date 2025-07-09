
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const RevenueChart = () => {
  const data = [
    { year: '2022', market: 58, projection: 58 },
    { year: '2024', market: 65, projection: 65 },
    { year: '2026', market: 73, projection: 73 },
    { year: '2028', market: 81, projection: 81 },
    { year: '2030', market: 87, projection: 87 },
    { year: '2032', market: 91, projection: 91 },
  ];

  const revenueProjection = [
    { year: 'Year 1', revenue: 50, expenses: 80 },
    { year: 'Year 2', revenue: 150, expenses: 120 },
    { year: 'Year 3', revenue: 400, expenses: 200 },
  ];

  return (
    <div className="space-y-8">
      {/* Market Growth Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-forest-700 mb-4">Global Recycling Market Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8f5e8" />
            <XAxis 
              dataKey="year" 
              stroke="#4a7c49"
              fontSize={12}
            />
            <YAxis 
              stroke="#4a7c49"
              fontSize={12}
              label={{ value: 'Value ($B)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#f8faf7', 
                border: '1px solid #a8d5a8',
                borderRadius: '8px'
              }}
              labelStyle={{ color: '#4a7c49' }}
            />
            <Line 
              type="monotone" 
              dataKey="market" 
              stroke="#4a9549" 
              strokeWidth={3}
              dot={{ fill: '#4a9549', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: '#7cbd7c' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Projection */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-forest-700 mb-4">R3GENIX Revenue Projection</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={revenueProjection}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8f5e8" />
            <XAxis 
              dataKey="year" 
              stroke="#4a7c49"
              fontSize={12}
            />
            <YAxis 
              stroke="#4a7c49"
              fontSize={12}
              label={{ value: 'Amount ($K)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#f8faf7', 
                border: '1px solid #a8d5a8',
                borderRadius: '8px'
              }}
              labelStyle={{ color: '#4a7c49' }}
            />
            <Bar dataKey="revenue" fill="#4a9549" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" fill="#637263" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-earth-500 rounded"></div>
            <span className="text-sm text-forest-600">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-sage-500 rounded"></div>
            <span className="text-sm text-forest-600">Expenses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
