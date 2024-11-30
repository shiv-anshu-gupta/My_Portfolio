import React from "react";
import { Routes, Route, Outlet } from "react-router-dom"; // Import Routes, Route, and Outlet
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About_me from "./Components/About_Me/About_me.jsx";
import Mywork from "./Components/MyWork/Mywork.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Connect from "./Components/Connect/Connect.jsx";

// Define a Layout component to hold the common layout
const Layout = () => (
  <div className="bg-black m-0 p-0">
    <Navbar />
    <Hero /><About_me /><Mywork /><Contact />
    <Outlet /> {/* This is where child routes will render */}
    <Footer />
  </div>
);

const App = () => {
  return (
    <Routes>
      {/* Define the main layout as a parent route */}
      <Route path="/" element={<Layout />}>

        <Route path="connect" element={<Connect />} /> {/* Connect as child route */}
      </Route>
    </Routes>
  );
};

export default App;
