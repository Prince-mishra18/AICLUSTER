import { useState } from "react";
import toolsData from "../data/tools.json";
import ToolCard from "../components/ToolCard";

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Extract unique categories dynamically from tools.json
  const categories = ["All", ...new Set(toolsData.map((tool) => tool.category))];

  // ✅ Filter tools based on selected category
  const filteredTools =
    selectedCategory === "All"
      ? toolsData
      : toolsData.filter((tool) => tool.category === selectedCategory);

  return (
    <section className="px-6 md:px-12 lg:px-20 pt-12 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-6">
          🛠 Explore AI Tools
        </h1>

        {/* ✅ Dropdown for categories */}
        <div className="flex justify-center mb-8">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ Show filtered tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
