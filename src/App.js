import React from "react"
import Header from "./components/header"
import Sections from "./components/sections"
import Footer from "./components/footer"
import Sidebar from "./components/sidebar"

export default function App() {
  return (
    <div className="app-body">
      <div className="header-sidebar">
        <Header />
        <Sidebar />
      </div>
      <Sections />
      <Footer />
    </div>
  );
}
