import React from "react"
import Header from "../components/Header/Header"
import SliderLink from "../components/common/SliderLink"
import "../styles/home.css"
import "../styles/rootSide.css"
import LongSlider from "../components/common/LongSlider"
import SectionCard from "../components/common/SectionCard"
import Recommended from "../components/common/ReconSection"
import Popular from "../components/common/Popular"
const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="dash-wrapper">
        <div className="wrapper">
          <div className="left-slider">
            <SliderLink />
          </div>

          <div className="right-side-container">
            <LongSlider />

            <section className="upcoming-section">
              <SectionCard />
            </section>

            <section className="Recommended">
              <Recommended />
            </section>

            <section>
              <Popular />
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
