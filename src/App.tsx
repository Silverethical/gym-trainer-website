import Footer from "./components/footer/Footer";
import FAQs from "./components/FAQs/FAQs";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <>
      <main className="container">
        <ContactMe />
        <FAQs />

        <Footer />
      </main>
    </>
  );
}

export default App;
