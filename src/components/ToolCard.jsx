import { useState } from "react";

export default function ToolCard({ tool }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tool Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 group"
      >
        <div className="relative">
          <img
            src={tool.image}
            alt={tool.name}
            className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl"></div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-2">{tool.name}</h2>
          <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3 shadow-md">
            {tool.category}
          </span>
          <p className="text-gray-700 text-sm line-clamp-3">{tool.description}</p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-11/12 max-w-2xl p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-purple-700 mb-4">{tool.name}</h2>
            <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 shadow-md">
              {tool.category}
            </span>
            <p className="text-gray-700 mb-4">{tool.description}</p>
            <p className="text-gray-500 mb-4 font-medium">Pricing: {tool.pricing}</p>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-purple-700 transition"
            >
              Visit Tool
            </a>
          </div>
        </div>
      )}
    </>
  );
}
