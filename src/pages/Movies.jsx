import React from "react"
import Header from "../components/Header/Header"
import "../styles/rootSide.css"
import SliderLink from "../components/common/SliderLink"
import MoviesPage from "../components/common/MoviesPage"
import { Link } from "react-router-dom"
import "../styles/Movies.css"
const Movies = () => {
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
            <MoviesPage />

            <section className="btn-section">
              <div className="btn-link">
                <button className="option-link  show-1">
                  <Link to="/" className="link-gate-way">
                    All
                  </Link>
                </button>
                <button className="option-link show-2">
                  <Link to="" className="link-gate-way">
                    Upcoming
                  </Link>
                </button>
                <button className="option-link  show-3">
                  <Link to="" className="link-gate-way">
                    Next View
                  </Link>
                </button>
                <button className="option-link show-4">
                  <Link to="" className="link-gate-way">
                    Features
                  </Link>
                </button>
                <button className="option-link show-5">
                  <Link to="" className="link-gate-way">
                    Features
                  </Link>
                </button>
                <button className="option-link show-6">
                  <Link to="" className="link-gate-way">
                    Features
                  </Link>
                </button>
                <button className="option-link show-7">
                  <Link to="" className="link-gate-way">
                    Features
                  </Link>
                </button>
                <button className="option-link show-7">
                  <Link to="" className="link-gate-way">
                    Features
                  </Link>
                </button>
                <button className="option-link show-7">
                  <Link to="" className="link-gate-way">
                    Features
                  </Link>
                </button>
              </div>
            </section>


            <section className="section-veiw">
              <div className="card-section">
                <div className="card"></div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Movies
