import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analyzer from "./components/Analyzer";
import Dashboard from "./components/Dashboard";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Sections />
      <Analyzer />
      <Dashboard />
      <Footer />
    </main>
  );
}