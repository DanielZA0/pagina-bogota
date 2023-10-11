import { BrowserRouter } from "react-router-dom";

import { Intro, Contact, Historia, Hero, Navbar, Works, Certificates } from "./components";

import BigMap from "./components/mapa/big_map";

import React, { useState } from "react";

const App = () => {

  const [showOverlay, setShowOverlay] = useState(false);
  const [mapId, setMapId] = useState(0);

  const handleClick = (map_id_) => {

    setMapId(map_id_)

    if( showOverlay )
    {
      setShowOverlay(false);
      return;
    }
    setShowOverlay(true);
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <button onClick={handleClick}>Show overlay</button>
        <BigMap showOverlay={showOverlay} mapIdTest={mapId}/>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        */}
        <Intro />
        <Historia FuncInput={handleClick} />
        <Works />
        <Certificates />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
