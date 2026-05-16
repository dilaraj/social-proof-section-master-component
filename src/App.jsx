import './App.css'
import bgPatternMobileTop from './assets/images/bg-pattern-top-mobile.svg'
import bgPatternMobileBtm from './assets/images/bg-pattern-bottom-mobile.svg'
import bgPatternDesktopTop from './assets/images/bg-pattern-top-desktop.svg'
import bgPatternDesktopBtm from './assets/images/bg-pattern-bottom-desktop.svg'
import annePrfImg from './assets/images/image-anne.jpg'
import coltonPrfImg from './assets/images/image-colton.jpg'
import irenePrfImg from './assets/images/image-irene.jpg'

// Components
import Hero from './components/Hero/Hero'
import RatingBox from './components/RatingBox/RatingBox'
import ReviewBox from './components/ReviewBox/ReviewBox'

export default function App() {
  return (
    <div className="social-proof-section-main">
      <div className="background-pattern-top">
        <img src={bgPatternMobileTop} alt="Background Image" className="background-img-top mobile-img" />
        <img src={bgPatternDesktopTop} alt="Background Image"  className='background-img-top desktop-img'/>
      </div>
      <div className="background-pattern-btm">
        <img src={bgPatternMobileBtm} alt="Background Image" className="background-img-btm mobile-img" />
        <img src={bgPatternDesktopBtm} alt="Background Image" className="background-img-btm desktop-img" />
      </div>
      <div className="social-proof-content">
        <div className="hero-main-container">
          <Hero />
        </div>
        <div className="rating-boxes-container">
          <RatingBox 
            rating={5}
            ratingCategory={'Reviews'}
            marginLeft={'0'}
          />
          <div className="second-rating-box">
            <RatingBox 
              rating={5}
              ratingCategory={'Report Guru'}
              marginLeft={'2em'}
            />
          </div>
          <div className="third-rating-box">
            <RatingBox 
              rating={5}
              ratingCategory={'BestTech'}
              marginLeft={'4em'}
            />
          </div>
        </div>
        <div className="review-boxes-container">
          <div>
            <ReviewBox 
              reviewImg={coltonPrfImg}
              reviewerName={'Colton Smith'}
              reviewText={'"We needed the same printered design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'}
            />
          </div>
          <div className="second-review-box">
            <ReviewBox 
              reviewImg={irenePrfImg}
              reviewerName={'Irene Roberts'}
              reviewText={'"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery"'}
            />
          </div>
          <div className="third-review-box">
            <ReviewBox 
              reviewImg={annePrfImg}
              reviewerName={'Anne Wallace'}
              reviewText={'"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}