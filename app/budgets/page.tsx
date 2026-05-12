export default function Budgets() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600">Budgets Page</h1>

        <p className="mt-3 text-gray-600">Tailwind is working here 🚀</p>

        <button className="mt-6 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Add Budget
        </button>
      </div>
    </div>
  );
}
