import React from "react"
import "./app.css"
import { Routes, Route, Navigate } from "react-router-dom"
import {
  Home,
  Singles,
  Series,
  Player,
  SeriesDetails,
  Movies,
} from "./pages/index"

import { Login, Signup, Reset } from "./auth/index"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/payer" element={<Player />} />
        <Route path="/singles" element={<Singles />} />
        <Route path="/seriesDetails" element={<SeriesDetails />} />
      </Routes>
    </>
  )
}

export default App
