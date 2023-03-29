import React from "react";
import ButtonAppBar from "./components/Navbar";
import ColumnsGrid from "./components/About";
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CompleteSearch from "./components/totalsearch/compsearch";
import SetDate from "./utils/set-date";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <CompleteSearch />
      <ColumnsGrid id="about" />
      <SetDate id="suggestions" />
      <Gallery id="gallery" />
      <Contact id="contact" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
