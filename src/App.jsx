import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import SectionOne from "./components/SectionOne";
import FooterBanner from "./components/FooterBanner";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <Intro />
      </section>
      <section>
        <SectionOne />
      </section>
      <section>
        <Testimonials />
      </section>
      <FooterBanner />
      <Footer />
    </>
  );
}

export default App;
