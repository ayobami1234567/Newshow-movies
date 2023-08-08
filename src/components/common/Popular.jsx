import React from "react"
import "../../styles/popular.css"
import { popularCard } from "../../data/subItems"
const Popular = () => {
  return (
    <>
      <section className="popular-container">
        <h1>
          <a href="/">Popular</a>
        </h1>
        <div className="card-gta">
          <div className="container-gta">
            {popularCard.map(({ id, cover, description, date }) => {
              return (
                <div key={id} className="popular-card">
                  <img src={cover} alt="" />
                  <p className="movie-link">{description}</p>
                  <span>{date}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Popular

/* <section className="popular-container">
<h1>
  <a href="/">Popular</a>
</h1>
<div className="card-section">
  {popularCard.map(({ id, cover, description, date }) => {
    return <img src={cover} alt="" />
  })}
</div>
</section> */
