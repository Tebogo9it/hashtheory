import Spline from '@splinetool/react-spline/next';

// Components
import Navbar from "@/components/Navbar";
import Mission from "@/components/Mission";
import ProgramsGrid from "@/components/ProgramsGrid";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-carbon-black min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* ===== SPLINE 3D HERO SECTION ===== */}
      <section
        className="h-screen w-full relative pt-24" // Added padding to push below absolutely positioned nav if needed, or just h-screen
        id="hero"
      >
        <Spline
          scene="https://prod.spline.design/a2WpRonol0KWaFoD/scene.splinecode"
        />
        {/* Overlay a subtle gradient at bottom to transition seamlessly into background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-carbon-black to-transparent pointer-events-none" />
        {/* Hide Spline popup label via cover */}
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-[140px] md:w-[160px] h-[40px] md:h-[50px] bg-white/90 backdrop-blur-xl border border-white z-[100] rounded-lg pointer-events-none shadow-sm"></div>
      </section>

      {/* ===== REST OF SITE ===== */}
      <div className="relative z-20 bg-carbon-black">
        {/* Mission Section */}
        <Mission />

        {/* Programs Section */}
        <ProgramsGrid />

        {/* Features Section */}
        <Features />

        {/* Impact Section */}
        <Impact />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
