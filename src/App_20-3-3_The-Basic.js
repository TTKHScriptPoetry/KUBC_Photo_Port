import React from "react";
import Nav from "./components/Nav/index_20-3-3_The-Basic";
import About from "./components/About";
import Gallery from "./components/Gallery/index_20-3-3_Feat_useState-in-App_prop-in-Nav";

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;