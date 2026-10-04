import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section id="library" className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <h2 className="font-oswald text-3xl font-bold">THE LIBRARY</h2>
        <p className="mt-1 text-sm text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
        <div className="h-[600px]" />
      </section>
    </div>
  );
}
