import Footer from "./components/footer/Footer";
import FAQs from "./components/FAQs/FAQs";
import ContactMe from "./components/ContactMe/ContactMe";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
// import StudentReviews from "./components/StudentReviews/StudentReviews";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <Services />
        <ContactMe />
        <AboutMe />
        <FAQs />
        {/* <StudentReviews /> */}
        <Footer />
      </main>
    </>
  );
}

export default App;
