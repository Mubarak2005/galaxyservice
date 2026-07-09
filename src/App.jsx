import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Services from "./components/Services";
import About from "./components/About";
import ServiceArea from "./components/ServiceArea";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroCarousel />
      <Services />
      <About />
      <ServiceArea />
      <WhyChooseUs />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
