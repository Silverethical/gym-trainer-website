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
						<p>
							فاطمه حیدری، متخصصی با تجربه در حوزه علوم ورزشی و
							بدنسازی است. ایشان با دارا بودن مدرک کارشناسی علوم
							ورزشی، شناخت عمیقی از آناتومی بدن، فیزیولوژی ورزش،
							تمرینات بدنی و تغذیه ورزشی دارند.
						</p>
						<p>
							ایشان با گذراندن دوره‌های مربیگری فدراسیون بدنسازی و
							پرورش اندام و آمادگی جسمانی، موفق به اخذ مدرک
							مربیگری درجه ۳ بدنسازی و درجه ۳ آمادگی جسمانی
							شده‌اند.{" "}
						</p>
						<p>
							ایشان با بهره‌گیری از دانش علمی و تجربیات عملی خود،
							قادر به طراحی برنامه‌های تمرینی متناسب با اهداف و
							شرایط بدنی افراد مختلف هستند.
						</p>
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
