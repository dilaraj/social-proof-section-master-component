import './App.css'
import bgPatternMobileTop from './assets/images/bg-pattern-top-mobile.svg'
import bgPatternMobileBtm from './assets/images/bg-pattern-bottom-mobile.svg'

// Components
import Hero from './components/Hero/Hero'
import RatingBox from './components/RatingBox/RatingBox'

export default function App() {
  return (
    <div className="social-proof-section-main">
      <div className="background-pattern-top"><img src={bgPatternMobileTop} alt="Background Image" className="background-img-top" /></div>
      <div className="background-pattern-btm"><img src={bgPatternMobileBtm} alt="Background Image" className="background-img-btm" /></div>
      <div className="social-proof-content">
        <Hero />
        <div className="rating-boxes-container">
          <RatingBox 
            rating={5}
            ratingCategory={'Reviews'}
          />
          <RatingBox 
            rating={5}
            ratingCategory={'Report Guru'}
          />
          <RatingBox 
            rating={5}
            ratingCategory={'BestTech'}
          />
        </div>
      </div>
    </div>
  )
}