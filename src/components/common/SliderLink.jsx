import React from "react"
import sideLink from "../../data/subItems"
import { Link, NavLink } from "react-router-dom"
import "../../styles/sidebar.css"
const SliderLink = () => {
  return (
    <>
      <section>
        <div className="left-side">
          <div className="sub-menu">
            {sideLink.map((item, index) => (
              <Link key={index} className="link">
                <NavLink to={item.path} className="icons">
                  <div className="side-icon">
                    <button className="side-btn">
                      <i className="link-icon">{item.links}</i>
                      <span className="icon-title">{item.display}</span>
                    </button>
                  </div>
                </NavLink>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SliderLink
