export default function Header() {
  return (
    <header className="bg-gray-900 text-white flex justify-between items-center px-6 py-4 pr-10">
      {/* Added pr-10 for extra right margin */}
      <h1 className="text-2xl font-bold">AIverse</h1>
      <nav className="space-x-6">
        <a href="/" className="hover:text-yellow-400 transition">Home</a>
        <a href="/tools" className="hover:text-yellow-400 transition">Tools</a>
      </nav>
    </header>
  );
}
