import { useState, useEffect } from "react"
import SliderView from "../../data/SliderData"
import prev from "../../assets/images/samples/prev.png"
import next from "../../assets/images/samples/next.png"
import "../../styles/slider.css"
import { Link } from "react-router-dom"

const LongSider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = SliderView.length
  // console.log(slideLength)

  const autoScroll = true
  let slideInterval
  let intervalTime = 5000

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide, slideInterval, autoScroll])

  return (
    <div className="slider">
      <span className="arrow  next" onClick={nextSlide}>
        {/* <i className="ri-arrow-right-circle-line"></i> */}
        <img src={next} alt="" />
      </span>
      <span className="arrow prev" onClick={prevSlide}>
        {/* <i className="ri-arrow-left-circle-line"></i> */}
        <img src={prev} alt="" />
      </span>

      {SliderView.map((item, index) => {
        const { cover, title, subtitle, timeShow, description, btn } = item
        return (
          <div
            key={index}
            className={index === currentSlide ? "item current" : "item"}
          >
            {index === currentSlide && (
              <>
                <img src={cover} alt="" />
                <div className="content">
                  <h6>{title}</h6>
                  <h2>{subtitle}</h2>
                  <span>{timeShow}</span>
                  <p>{description}</p>
                  <span>
                    <Link to="" className="btn-gta">
                      {btn}
                    </Link>
                  </span>
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default LongSider
