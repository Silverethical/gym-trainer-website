import Button from "../Button/Button";
import "./HeroSection.scss";

const loopTextArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const HeroSection = () => {
    return (
        <>
            <section id="hero-section">
                <div id="hero-section-wrapper" className="container">
                    <div id="hero-section-right-side">
                        <div id="hero-section-text-wrapper">
                            <div className="hero-section-text-wrapper-right">
                                <span className="hero-section-text-primary">
                                    آنچه میخواهــی
                                </span>
                                <span className="hero-section-text-secondary">
                                    در آیینه ببیـــنی
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
                                href="#services"
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
                </div>
            </section>
            <div className="infintie-scroll">
                <div className="infinite-scroll-text-wrapper">
                    {loopTextArray.map((item) => (
                        <div key={item} className="loop-text">
                            FATEME HEIDARI
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HeroSection;
