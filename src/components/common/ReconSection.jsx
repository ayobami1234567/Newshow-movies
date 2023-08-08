import React from "react"
import { upcoming } from "../../data/subItems"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const ReconSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="show-available">
      <h1>
        <a href="/">Recommended</a>
      </h1>
      <div className="Next-movies">
        <div>
          <Slider {...settings}>
            {upcoming.map(({ id, cover, title, date }) => {
              return (
                <div className="update-movie" key={id}>
                  <div>
                    <img src={cover} alt="" />
                  </div>

                  <div>
                    <h5>{title}</h5>
                    <p>{date}</p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default ReconSection
