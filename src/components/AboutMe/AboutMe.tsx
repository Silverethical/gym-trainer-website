import "./AboutMe.scss";

const AboutMe = () => {
	return (
		<section id="about-me">
			<div className="container">
				<h2 className="title">درباره من</h2>

				<div className="about-me-wrapper">
					<div className="about-me-title-wrapper">
						<span className="about-me-title">فاطمه حیدری</span>
						<span className="about-me-title">مربی بدنسازی</span>
					</div>
					<div className="about-me-description">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
						چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
						بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
						چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
						بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.لورم
						ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
						با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
						روزنامه و مجله در ستون و سطرآنچنان که لازم است.لورم
						ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
						با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
						روزنامه و مجله در ستون و سطرآنچنان که لازم است
					</div>

					<img
						className="about-me-circle"
						id="about-me-red-circle"
						src="/images/general/about-me-red-square.png"
					/>
					<img
						id="about-me-yellow-circle"
						className="about-me-circle"
						src="/images/general/about-me-yellow-square.png"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
