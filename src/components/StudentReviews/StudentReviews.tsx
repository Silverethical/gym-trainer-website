import "./StudentReviews.scss";
import StudentReview from "../StudentReview/StudentReview";
import { studentReviews } from "../../data/studentReviewData";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const StudentReviews = () => {
	return (
		<section id="student-review">
			<h2 className="title">نظرات شاگردان</h2>
			<Swiper
				slidesPerView={4}
				spaceBetween={12}
				loop={true}
				grabCursor={true}
				modules={[Autoplay]}
				autoplay={{
					delay: 2500,
					pauseOnMouseEnter: true,
					disableOnInteraction: false,
				}}
				breakpoints={{
					4000: {
						slidesPerView: 6,
					},
					1900: {
						slidesPerView: 5,
					},
					1040: {
						slidesPerView: 3,
					},
					500: {
						slidesPerView: 2,
					},
					360: {
						slidesPerView: 2,
					},
				}}
			>
				{studentReviews.map((review, idx) => (
					<SwiperSlide key={idx}>
						<StudentReview
							studentName={review.name}
							studentReview={review.review}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default StudentReviews;
