import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import StyleSelector from "./sections/StyleSelector";
import Ritual from "./sections/Ritual";
import Barbers from "./sections/Barbers";
import Membership from "./sections/Membership";
import BookingCTA from "./sections/BookingCTA";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4EBDD] text-[#2A211C]">
      <Navbar />
      <Hero />
      <Services />
      <StyleSelector />
      <Ritual />
      <Barbers />
      <Membership />
      <BookingCTA />
      <Footer />
    </main>
  );
}

export default App;
