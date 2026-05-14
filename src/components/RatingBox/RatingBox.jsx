import './RatingBox.css'
import starIcon from '../../assets/images/icon-star.svg'

export default function RatingBox({rating, ratingCategory}) {
    return (
        <div className="rating-box-container">
            <div className="rating-stars">
                {Array.from({ length: rating }, (_, index) => (
                    <img src={starIcon} alt="star icon" key={index} className="star-icon" />
                ))}
            </div>
            <div className="rating-category">
                Rated {rating} Stars in {ratingCategory}
            </div>
        </div>
    )
}