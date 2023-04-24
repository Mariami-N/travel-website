// import FixedHeaderTemplate from "./modules/Header/FixedHeader/FixedHeaderTemplat
import Footer from "./genericComponents/Footer/Footer";
import Header from "./genericComponents/Header/Header";
// import FooterLogo from "./genericComponents/Footer/components/FooterLogo";
// css
import "./css/reset.css";
import "./css/General.css";
import HomePage from "./pages/HomePage";
import TestimonialTemplate from "./modules/HomePage/Testimonial/TestimonialTemplate";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <TestimonialCard/>
      <Footer />

      <TestimonialTemplate />

    </>
  );
}

export default App;
