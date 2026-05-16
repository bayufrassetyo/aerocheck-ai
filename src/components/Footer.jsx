export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold text-white">AeroCheck AI</p>
          <p>AI-powered Aviation Maintenance Record Assistant</p>
        </div>

        <div className="text-left md:text-right">
          <p>Built with Gemini, AI Studio, and Cloud Run for #JuaraVibeCoding.</p>
          <p>Made by Bayu Frassetyo Wibowo</p>
        </div>
      </div>
    </footer>
  );
}