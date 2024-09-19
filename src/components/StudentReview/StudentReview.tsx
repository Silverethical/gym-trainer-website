import "./StudentReview.scss";

type StudentReviewComponent = {
	studentName: string;
	studentReview: string;
};

const StudentReview = ({
	studentName,
	studentReview,
}: StudentReviewComponent) => {

	return (
		<div className="student-review-wrapper">
			<div className="student-review-name">{studentName}</div>
			<div className="student-review-description">
				<span>{studentReview}</span>
				<img
					src="../../../public/images/general/quote.svg"
					className="student-review-quote"
				/>
			</div>
		</div>
	);
};

export default StudentReview;
