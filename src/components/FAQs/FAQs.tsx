import FAQ from "../FAQ/FAQ";
import "./FAQs.scss";
import FAQData from "../../data/FAQData";

const FAQs = () => {
	return (
		<section id="FAQ">
			<h2 className="title">سوالات متداول</h2>
			<div className="FAQs-wrapper">
				{FAQData.map((data, id) => (
					<FAQ
						question={data.question}
						answer={data.answer}
						key={id}
					/>
				))}
			</div>
			<img
				id="FAQ-arrow"
				src="../../../public/images/general/faq-arrow.png"
			/>
		</section>
	);
};

export default FAQs;
