import Footer from "./components/footer/Footer";
import Button from "./components/Button/Button";
import FAQs from "./components/FAQs/FAQs";

function App() {
	return (
		<>
			<main className="container">
				<Footer />
				<Button size="medium" variant="filled" />
				<Button
				href="#"
					startIcon="../public/images/socials/phone.svg"
					buttonId="test"
					size="medium"
					variant="outlined"
				/>
				<FAQs/>
			</main>
		</>
	);
}

export default App;
