import FAQ from "../FAQ/FAQ";
import "./FAQs.scss";
import FAQData from "../../data/FAQData";

const FAQs = () => {
    return (
        <>
            <div className="FAQs-wrapper">
                {FAQData.map((data, id) => (
                    <FAQ
                        question={data.question}
                        answer={data.answer}
                        key={id}
                    />
                ))}
            </div>
        </>
    );
};

export default FAQs;
