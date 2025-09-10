import { Linkedin, Github, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Social Icons Row */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/prince-mishra-3068042a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Prince-mishra18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100012910695752"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        {/* Bottom Row: Website name - Copyright - Developer */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <h2 className="text-xl font-bold text-yellow-400">AIverse</h2>
          <p className="text-gray-400 text-sm my-2 md:my-0 text-center">
            © {new Date().getFullYear()} AIverse. All rights reserved.
          </p>
          <p className="text-yellow-400 font-semibold text-sm">
            Developed by Prince Mishra
          </p>
        </div>
      </div>
    </footer>
  );
}
