import { BrowserRouter } from "react-router-dom";

import { Intro, Contact, Historia, Hero, Navbar, Autores, Test } from "./components";

import BigMap from "./components/mapa/big_map";

import React, { useState } from "react";

import { motion } from "framer-motion";

const App = () => {

  const DEFAULT_SCALE = 1;

  const HOVER_SCALE = 1.1;
  const MAX_SCALE = 5;

  const localidades = 20;

  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [Scale, setScale] = useState(OnesVector());
  const [overlayDuration, setOverlayDuration] = useState(1);
  const [localidad, setlocalidad] = useState("");
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

    setScale(OnesVector());

  }

  const enableOverlay = () => {

    document.getElementById("info_localidad").style.zIndex = "10";
    setOverlayOpacity(1);

  };

  
  const handleLocalidadClick = (index, color = "#F1E4B7", localidad, frase, url, texto) => {

    console.log(document.documentElement.scrollTop);
    console.log(index);
    setlocalidad(localidad);
    setOverlayBackground(color);
    setOverlayDuration(1);

    setCurrentIndex(index);
    enableOverlay();

    const elementToMove = document.getElementById(`${index}`);
    const elementParent = document.getElementById("svg_map");
    elementParent.appendChild(elementToMove);

    let scale_vector = OnesVector();
    scale_vector[index] = MAX_SCALE;

    setScale(scale_vector);

  }

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Intro />
        <div className='relative z-0 bg-center h-100' style={{ background:'white', height:"100vh"}}>
          <Test DEFAULT_SCALE={DEFAULT_SCALE} HOVER_SCALE={HOVER_SCALE} MAX_SCALE={MAX_SCALE} Scale={Scale} handleLocalidadClick={handleLocalidadClick} />

          <motion.div
            id="info_localidad"
            style={
              { zIndex: -1, color:'black', background: 'rgba(255, 0, 0, 0)', position: "absolute", top: 0, right: 0, left: 0 }}
            initial={{ opacity: 1}}
            animate={{ opacity: overlayOpacity }}
            transition={{ duration: overlayDuration }}>

            <div className="relative bg-center">

              <main role="main" className=" flex-column inner cover">
                <h1 className="cover-heading h-20 flex aling-center">{localidad}</h1>
                <p className="flex lead h-20">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <div align="center">
                  <iframe 
                    className = 'mt-10 relative text-align-center'
                    width="90%" height="50%"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                  </iframe>
                  <p className="flex lead h-20">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                </div>
                <p className="lead p-10">
                  <a href="#" className="flex btn btn-lg btn-danger" onClick={(e) => { e.preventDefault(); disableOverlay(); }}>Volver al mapa</a>
                </p>
              </main>

            </div>

        </motion.div>

        </div>
        {/* <Autores />  */}

        <Intro />
        <Intro />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
