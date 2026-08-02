const menuData = [
  {
    day: 'Monday',
    lunch: 'Mix Veg + Dal + Roti + Rice',
    dinner: 'Seb Bhaji + Dal + Roti',
  },
  {
    day: 'Tuesday',
    lunch: 'Paneer Sabji + Dal + Roti + Rice',
    dinner: 'Aloo Shimla / Patta Gobhee + Roti + Kheer',
  },
  {
    day: 'Wednesday',
    lunch: 'Veg Pulao + Raita + Salad',
    dinner: 'Aloo Matar + Dal + Roti',
  },
  {
    day: 'Thursday',
    lunch: 'Chhach Aloo ki Sabji + Dal + Roti + Rice',
    dinner: 'Seasonal Sabji + Dal + Roti',
  },
  {
    day: 'Friday',
    lunch: 'Chhole ki Sabji + Puri + Achar + Raita',
    dinner: 'Locky Chana + Dal + Roti',
  },
  {
    day: 'Saturday',
    lunch: 'Seasonal Sabji + Roti + Raita',
    dinner: 'Paneer Sabji + Dal + Roti',
  },
  {
    day: 'Sunday',
    lunch: 'Jeera Aloo + Dal + Roti + Rice',
    dinner: 'Rajma + 2 Roti + Rice',
  },
];

export default function FoodMenu() {
  return (
    <div className="p-4 md:p-8 bg-gray-50 mb-5 mt-5">
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
                {/* <th className="p-4 font-semibold">Dinner</th> */}
              </tr>
            </thead>
            <tbody>
              {menuData.map((item) => (
                <tr key={item.day} className="border-b border-gray-100 hover:bg-gray-50 text-gray-700">
                  <td className="p-4 font-medium text-green-700">{item.day}</td>
                  
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