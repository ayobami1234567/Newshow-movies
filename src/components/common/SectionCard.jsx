import React from "react"
import { cardItem } from "../../data/subItems"
import "../../styles/SectionCard.css"
import playBtn from "../../assets/images/samples/play.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SectionCard = () => {
  const settings = {
    // dots: true,
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
          autoplay: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className="watching">
        <h1>
          <a href="/">Continue watching</a>
        </h1>
        <div className="watching-section">
          <div>
            <Slider {...settings}>
              {cardItem.map(({ id, cover, play, title, dec }) => {
                return (
                  <div className="movie-watch" key={id}>
                    <div className="slider-img">
                      <img src={cover} alt="card" />
                    </div>
                    <div className="text">
                      <h4>{title}</h4>
                      <p>{dec}</p>
                    </div>
                    <img src={playBtn} alt="" className="play" />
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionCard
