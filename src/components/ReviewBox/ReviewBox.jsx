import './ReviewBox.css'

export default function ReviewBox({reviewImg, reviewerName, reviewText}) {
    return (
        <div className="review-box-container">
            <div className="reviewer-info">
                <img src={reviewImg} alt="Profile Image" className="prof-img" />
                <div className="reviewer-name">
                    {reviewerName}
                    <span>Verified Buyer</span>
                </div>
            </div>
            <div className="review-text">
                {reviewText}
            </div>
        </div>
    )
}