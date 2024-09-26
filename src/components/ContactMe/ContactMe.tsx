import { socials } from "../../data/socials";
import "./contactMe.scss";
import Button from "../Button/Button";

const ContactMe = () => {
	return (
		<section id="contact-me">
			<div className="container">
				<h2 className="title">راه های ارتباطی</h2>
				<div id="socials">
					{socials.map((social, idx) => (
						<Button
							key={idx}
							variant="outlined"
							startIcon={social.iconUrl}
							buttonText={social.text}
							href={social.link}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactMe;
