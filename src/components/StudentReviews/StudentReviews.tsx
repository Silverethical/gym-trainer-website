import "./StudentReviews.scss";
import StudentReview from "../StudentReview/StudentReview";
import { studentReviews } from "../../data/studentReviewData";
import { useState } from "react";

const StudentReviews = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleRemovingWhiteSpace = () => setIsScrolled(true);

	return (
		<section id="student-review">
			<h2 className="title">نظرات شاگردان</h2>
			<div
				onScroll={handleRemovingWhiteSpace}
				className="student-reviews-wrapper"
				data-is-scrolled={isScrolled}
			>
				{studentReviews.map((review, id) => (
					<StudentReview
						key={id}
						studentName={review.name}
						studentReview={review.review}
					/>
				))}
			</div>
		</section>
	);
};

export default StudentReviews;
