import Footer from "./components/footer/Footer";
import FAQs from "./components/FAQs/FAQs";
import ContactMe from "./components/ContactMe/ContactMe";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <main className="container">
		<ContactMe />
		<AboutMe/>
        <FAQs />

        <Footer />
      </main>
    </>
  );
}

export default App;
