import { Hero } from "./components/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <main className="mx-auto flex-1 overflow-hidden">
        <Hero />
      </main>
    </div>
  );
}
