import React from "react"
import Header from "./components/header"
import Sections from "./components/sections"
import Footer from "./components/footer"

export default function App() {
  return (
    <div className="app-body">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}
