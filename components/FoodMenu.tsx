const menuData = [
  { day: 'Monday', breakfast: 'Aloo Paratha + Achar + Chai', lunch: 'Mix Veg Sabji + Masoor Dal + 5 Roti + Salad', dinner: 'Seb Bhaji + 5 Roti' },
  { day: 'Tuesday', breakfast: 'Poha + Chai', lunch: 'Paneer Sabji + 5 Roti + Jeera Aloo + Salad', dinner: 'Aloo Shimla + 5 Roti + Kheer' },
  { day: 'Wednesday', breakfast: 'Sada Paratha + Achar + Chai', lunch: 'Veg Pulao + Raita', dinner: 'Aloo Matar + 5 Roti + Chatnee' },
  { day: 'Thursday', breakfast: 'Aloo Sandwich + Chai', lunch: 'Chhach Aloo ki Sabji + 5 Roti + Salad', dinner: 'Dal Arhar + 5 Roti + Salad' },
  { day: 'Friday', breakfast: 'Namkeen Java + Chai', lunch: 'Chhole ki Sabji + 8 Puri + Achar + Raita', dinner: 'Kadhi + Steamed Rice' },
  { day: 'Saturday', breakfast: 'Besan Chilla + Chatnee + Chai', lunch: 'Aloo Gobhee Sabji + 5 Roti + Raita', dinner: 'Meethe Java + Aloo Chat' },
  { day: 'Sunday', breakfast: 'Bread Aloo Pakodi + Chai', lunch: 'Rajma Aloo + 5 Roti + Rice + Salad', dinner: 'Veg Pasta' },
];

export default function FoodMenu() {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 w-full max-w-4xl mx-auto">
        <h2 className="heading text-2xl md:text-4xl text-[#005248] font-bold text-center mb-8">
          ROODMATES Weekly Food Menu<span className="text-[#FFA500]">.</span>
        </h2>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="text-green-900 border-b-2 border-gray-100">
                <th className="p-4 font-semibold">Day</th>
                <th className="p-4 font-semibold">Breakfast</th>
                <th className="p-4 font-semibold">Lunch</th>
                <th className="p-4 font-semibold">Dinner</th>
              </tr>
            </thead>
            <tbody>
              {menuData.map((item) => (
                <tr key={item.day} className="border-b border-gray-100 hover:bg-gray-50 text-gray-700">
                  <td className="p-4 font-medium text-green-700">{item.day}</td>
                  <td className="p-4 text-sm">{item.breakfast}</td>
                  <td className="p-4 text-sm">{item.lunch}</td>
                  <td className="p-4 text-sm">{item.dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {menuData.map((item) => (
            <div key={item.day} className="border border-gray-100 rounded-xl p-4 bg-gray-50">
              <h3 className="font-bold text-green-700 mb-2 border-b border-gray-200 pb-2">{item.day}</h3>
              <div className="grid grid-cols-1 gap-2 text-sm">
                <p><span className="font-semibold text-gray-900">Breakfast:</span> {item.breakfast}</p>
                <p><span className="font-semibold text-gray-900">Lunch:</span> {item.lunch}</p>
                <p><span className="font-semibold text-gray-900">Dinner:</span> {item.dinner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}