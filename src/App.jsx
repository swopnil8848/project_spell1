import React from "react"
import Footer from "./components/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <h1>
      <Navbar/>
      <Home/>
      <Footer/>
    </h1>

  )
}