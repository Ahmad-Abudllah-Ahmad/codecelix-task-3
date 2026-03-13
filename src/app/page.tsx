import Hero from "@/components/Hero";
import ServicesSummary from "@/components/ServicesSummary";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSummary />
      <Testimonials />

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <div className="container mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to start your project?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Contact us today for a free consultation and let's build something amazing together.
          </p>
          <button className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-white/90 transition-colors">
            Contact Us Now
          </button>
        </div>
      </section>
    </main>
  );
}
