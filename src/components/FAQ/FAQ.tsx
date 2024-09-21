import { useState } from "react";
import "./FAQ.scss";

type FAQComponent = {
    closedIcon?: string;
    openedIcon?: string;
    question?: string;
    answer?: string;
};

const defaultOpenedIcon = "/images/general/minus.svg";
const defaultClosedIcon = "/images/general/plus.svg";

const FAQ = ({
    openedIcon = defaultOpenedIcon,
    closedIcon = defaultClosedIcon,
    question = "q1",
    answer = "a1",
}: FAQComponent) => {
    const [faqIcon, setFaqIcon] = useState(closedIcon);
    const [isClosed, setIsClosed] = useState(true);

    const handleFAQIcon = () => {
        setFaqIcon((prev) => (prev === openedIcon ? closedIcon : openedIcon));
        setIsClosed((prev) => !prev);
    };

    return (
        <div className="faq-wrapper">
            <div
                className="faq-question-wrapper"
                data-is-closed={isClosed}
                onClick={handleFAQIcon}
            >
                <div className="faq-question-wrapper-text">{question}</div>
                <img className="faq-question-wrapper-icon" src={faqIcon}></img>
            </div>
            <div className="faq-answer" data-is-closed={isClosed}>
                {answer}
            </div>
        </div>
    );
};
export default FAQ;
