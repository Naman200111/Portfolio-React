import React from "react"
import Header from "./components/header/header"
import Sections from "./components/sections/sections"
import Footer from "./components/footer/footer"
export default function App() {
  return (
    <div className="app-body">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}
