import React from "react"
import "./auth.css"
import loginImg from "../assets/images/samples/Logo icon.png"
const Login = () => {
  return (
    <>
      <section className="auth">
        <div className="sign-form">
          <img src={loginImg} alt="" />
          <h3>Login</h3>
          <p>Login to continue watching on newlabel</p>
          <form>
            <label>Email or UserName</label>
            <input type="text  email" required />
            {/* <label>Email</label>
            <input type="email" required /> */}
            <label>Password</label>
            <input type="password" required />
            <button className="--btn">Login</button>
          </form>
          <p className="content-text">
            {/* <a href="/signup"> Don't have an account? sign up</a> Forget
            password */}
            <a href="/reset">Forget Password</a>
          </p>
        </div>
      </section>
    </>
  )
}

export default Login
