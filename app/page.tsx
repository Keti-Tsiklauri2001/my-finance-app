export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-10 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600">
          Tailwind is working 🚀
        </h1>

        <p className="mt-4 text-gray-600">
          If you see styles, your setup is correct.
        </p>

        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Click me
        </button>
      </div>
    </main>
  );
}
