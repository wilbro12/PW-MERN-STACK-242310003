import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;