import "./StudentReviews.scss";
import StudentReview from "../StudentReview/StudentReview";
import { studentReviews } from "../../data/studentReviewData";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
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
				autoplay={true}
				breakpoints={{
					4000: {
						slidesPerView: 6,
					},
					1900: {
						slidesPerView: 5,
					},
					1040: {
						slidesPerView: 4,
					},
					720: {
						slidesPerView: 3,
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
