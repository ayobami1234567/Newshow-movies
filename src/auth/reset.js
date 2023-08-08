import React from "react"
import "./auth.css"
import resetImg from "../assets/images/samples/Logo icon.png"
const reset = () => {
  return (
    <>
      <section className="auth">
        <div className="reset-form">
          <img src={resetImg} alt="" />
          <h3>Reset account</h3>
          <p>Reset to continue watching on newlabel</p>
          <form>
            <label>Reset</label>
            <input type="email" required />
            <button className="--btn"> Reset Password </button>
          </form>
          <p className="content-text">
            <a href="/login"> Back to login page</a>
          </p>
        </div>
      </section>
    </>
  )
}

export default reset
