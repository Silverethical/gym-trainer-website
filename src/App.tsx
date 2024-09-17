import Footer from "./components/footer/Footer";
import Button from "./components/Button/Button";

function App() {
	return (
		<>
			<main className="container">
				<Footer />
				<Button size="medium" variant="filled" />
				<Button
					startIcon="../public/images/socials/phone.svg"
					buttonId="test"
					size="medium"
					variant="outlined"
				/>
			</main>
		</>
	);
}

export default App;
