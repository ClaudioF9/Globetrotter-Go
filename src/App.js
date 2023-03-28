import React from "react";
import ButtonAppBar from "./components/Navbar";
import ColumnsGrid from "./components/About";
import Suggestions from './components/Suggestions';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <ButtonAppBar />
      <ColumnsGrid id="about" />
      <Suggestions id="suggestions" />
      <Gallery id="gallery" />
      <Contact id="contact" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
