import { BrowserRouter } from "react-router-dom";

import { Intro, Contact, Historia, Hero, Navbar, Autores, Test } from "./components";

import BigMap from "./components/mapa/big_map";

import React, { useState } from "react";

import { motion } from "framer-motion";

const App = () => {

  const DEFAULT_SCALE = 1;

  const HOVER_SCALE = 1.1;
  const MAX_SCALE = 10;

  const localidades = 20;
  
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [Scale, setScale] = useState( OnesVector() );
  const [overlayDuration, setOverlayDuration] = useState( 0.5 );

  const [overlayBackground, setOverlayBackground] = useState("#F1E4B7");

  function OnesVector() {
    return Array.from(Array(localidades), () => 1);
  }

  const disableOverlay = () => {

    document.getElementById("info_localidad").style.zIndex = "-10";
    setOverlayDuration(0);
    setOverlayOpacity(0);

    const elementToMove = document.getElementById(`${currentIndex}`);
    const elementParent = document.getElementById("svg_map");
    elementParent.appendChild(elementToMove);

    setScale( OnesVector() );

  }

  const enableOverlay = () => {

    document.getElementById("info_localidad").style.zIndex = "10";
    setOverlayOpacity(1);

  };

  const handleLocalidadClick = (index, color="#F1E4B7") => {

    console.log(index);

    setOverlayBackground(color);
    setOverlayDuration(0.5);

    setCurrentIndex( index );
    enableOverlay();    

    const elementToMove = document.getElementById(`${index}`);
    const elementParent = document.getElementById("svg_map");
    elementParent.appendChild(elementToMove);

    let scale_vector = OnesVector();
    scale_vector[index] = MAX_SCALE;

    setScale( scale_vector );

  }

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <Intro />
        <BigMap showOverlay={showOverlay} mapIdTest={mapId} />
        <Historia FuncInput={handleClick} />
        <Autores /> */}
        <div className='relative z-0'>
         <Test DEFAULT_SCALE={DEFAULT_SCALE} HOVER_SCALE={HOVER_SCALE} MAX_SCALE={MAX_SCALE}  Scale={Scale} handleLocalidadClick={handleLocalidadClick} />
        </div>
        
        <motion.div 
        id="info_localidad"
        style={
          { zIndex:-1, background:overlayBackground, position:"absolute", top:0, right:0, bottom:0, left:0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: overlayOpacity }}
        transition={{ duration: overlayDuration}}>
              
        <div className="container d-flex h-100 p-3 mx-auto flex-column">
        
          <main role="main" className="inner cover">
            <h1 className="cover-heading h-20">Localidad Usme</h1>
            <p className="lead h-20">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <div align="center">
              <iframe width="720" height="480"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
            </div>
            <p className="lead p-10">
              <a href="#" className="btn btn-lg btn-danger" onClick={()=>disableOverlay()} >Volver al mapa</a>
            </p>
          </main>

        </div>

        </motion.div>

      </div>
    </BrowserRouter>
  );
}

export default App;
