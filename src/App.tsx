import Footer from "./components/footer/Footer";
import FAQs from "./components/FAQs/FAQs";
import ContactMe from "./components/ContactMe/ContactMe";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <ContactMe />
        <FAQs />
        <Footer />
      </main>
    </>
  );
}

export default App;
