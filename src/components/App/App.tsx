import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";

function App() {
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  return (
    <div className="App">
      <Header
        isSlideshowActive={isSlideshowActive}
        setIsSlideshowActive={setIsSlideshowActive}
      />
      <Gallery isSlideshowActive={isSlideshowActive} />
    </div>
  );
}

export default App;
