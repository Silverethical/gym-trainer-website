import Button from "../Button/Button";
import "./HeroSection.scss";

const HeroSection = () => {
    return (
        <section id="hero-section">
            <div id="hero-section-right-side">
                <div id="hero-section-text-wrapper">
                    <div className="hero-section-text-wrapper-right">
                        <span className="hero-section-text-primary">
                            آنچه می خواهی
                        </span>
                        <span className="hero-section-text-secondary">
                            در آیینه ببینی
                        </span>
                    </div>
                    <div className="hero-section-text-primary hero-section-text-wrapper-left">
                        باش
                    </div>
                </div>
                <div id="hero-section-button-wrapper">
                    <Button
                        buttonClass="hero-section-buttons"
                        buttonText="تماس با من"
                        variant="filled"
						href="#contact-me"
                    />
                    <Button
                        buttonClass="hero-section-buttons"
                        buttonText="مشاهده خدمات"
                        variant="outlined"
                    />
                </div>
            </div>
            <div id="hero-section-left-side">
                <div id="hero-section-image-wrapper">
                    <img
                        src="../../../public/images/general/hero-section-image.png"
                        id="hero-section-image"
                    />
                    <img
                        src="../../../public/images/general/hero-section-image-shadow.png"
                        id="hero-section-image-shadow"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
