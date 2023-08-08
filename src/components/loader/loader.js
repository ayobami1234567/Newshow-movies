import React from "react"
import loaderimg from "../../assets/loader.gif"
import { ReactDOM } from "react-dom"
import "./loading.css"
const loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderimg} alt="loading...." />
      </div>
    </div>,
    document.getElementById("loader")
  )
}

export default loader
