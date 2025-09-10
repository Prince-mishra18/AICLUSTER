import toolsData from "../data/tools.json";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 pt-12 pb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
        Welcome to <span className="text-yellow-300">AIverse</span>
      </h1>
      <p className="text-xl max-w-3xl mb-8">
        🌍 Discover the best AI tools across categories. From chatbots 🤖 to image generators 🎨 — explore everything in one place!
      </p>

      {/* Block for total tools */}
      <div className="bg-white text-black rounded-2xl shadow-lg p-6 mb-8 w-full max-w-md hover:scale-105 transition">
        <h2 className="text-3xl font-bold mb-2">💡 {toolsData.length}+ AI Tools</h2>
        <p className="text-gray-700">
          Explore a wide range of AI tools including chatbots, image generators, coding assistants, and more. Click below to see all tools!
        </p>
        <a
          href="/tools"
          className="mt-4 inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition"
        >
          🚀 Explore Tools
        </a>
      </div>
    </section>
  );
}
