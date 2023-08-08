import { useState } from "react"
import signImg from "../assets/images/samples/Logo icon.png"
import { ToastContainer, toast } from "react-toastify"
import { createUserWithEmailAndPassword } from "firebase/auth"
import "react-toastify/dist/ReactToastify.css"
// import Loader from "../components/loader/loader"
import { auth } from "../firebase/Config"
import { useNavigate } from "react-router-dom"
const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [password, setPassword] = useState("")
  // const [isLoaing, setIsLoaing] = useState(false)

  const navigate = useNavigate()

  const signup = (e) => {
    e.preventDefault()
    // console.log(name, email, date, password)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        // setIsLoading(false)
        toast.success("Registration Successful...")
        navigate("/login")
      })
      .catch((error) => {
        toast.error(error.message)
        // setIsLoading(false)
      })
  }

  return (
    // react frameElement ending tap is so impotant
    <>
      <ToastContainer />
      <section className="auth">
        <div className="login-form">
          <img src={signImg} alt="" />
          <h3>Sign Up</h3>
          <p>Sign up to continue watching on newlabel</p>
          <form onSubmit={signup}>
            <label>Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Date of birth</label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="--btn" type="submit">
              Login
            </button>
          </form>
          <p className="button-text">
            By signing up you agree to all NewlabelTv
            <a href="/" style={{ color: "#1BB954" }}>
              Terms
            </a>
            and
            <a href="/" className="condition-link">
              Condition
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

export default Signup
