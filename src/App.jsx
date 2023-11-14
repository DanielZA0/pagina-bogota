import { BrowserRouter } from "react-router-dom";

import { Intro, Hero, Navbar, Autores, Mapa, MapaTitle, HeroPhone } from "./components";
import { styles } from "./Styles";
import React, { useState } from "react";
import { close, logo_loclaidades } from "./assets";
import { motion } from "framer-motion";
import {MapaVariant } from "./utils/motion";

const App = () => {
  const MAX_SCALE = 10;
  const localidades = 20;
  const DEFAULT_SCALE = 1;
  const HOVER_SCALE = 1.1;

  function OnesVector() {
    return Array.from(Array(localidades), () => 1);
  }

  function ZeroVector() {
    return Array.from(Array(localidades), () => 0);
  }

  const [x, setX] = useState(ZeroVector());
  const [y, setY] = useState(ZeroVector());
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [Scale, setScale] = useState(OnesVector());
  const [overlayDuration, setOverlayDuration] = useState(1);
  const [localidad, setlocalidad] = useState("");
  const [Frase1, setFrase1] = useState("");
  const [urlLocalidad, seturlLocalidad] = useState("");
  const [texto2, setTexto2] = useState("");
  const [showVideo, setshowVideo] = useState(1);

  const [overlayBackground, setOverlayBackground] = useState("#F1E4B7");



  const disableOverlay = () => {

    document.getElementById("info_localidad").style.zIndex = "-10";
    setOverlayDuration(0);
    setOverlayOpacity(0);

    const elementToMove = document.getElementById(`${currentIndex}`);
    const elementParent = document.getElementById("svg_map");
    elementParent.appendChild(elementToMove);

    setScale(OnesVector());
    setX(ZeroVector());
    setY(ZeroVector());

  }

  const enableOverlay = () => {

    document.getElementById("info_localidad").style.zIndex = "10";
    setOverlayOpacity(1);

  };


  const handleLocalidadClick = (index, show, personalScale, x, y, localidad, frase, url, texto) => {


    console.log(index);
    console.log(personalScale)
    setlocalidad(localidad);
    setFrase1(frase);
    seturlLocalidad(url);
    setTexto2(texto);
    setOverlayDuration(1);
    setCurrentIndex(index);
    setshowVideo(show)
    enableOverlay();

    const elementToMove = document.getElementById(`${index}`);
    const elementParent = document.getElementById("svg_map");
    elementParent.appendChild(elementToMove);

    let y_vector = ZeroVector();
    y_vector[index] = y;
    setY(y_vector);

    let x_vector = ZeroVector();
    x_vector[index] = x;
    setX(x_vector);

    let scale_vector = OnesVector();
    scale_vector[index] = (MAX_SCALE * personalScale);
    setScale(scale_vector);
  }
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Navbar />
        <div className=' md:hidden'>
          <HeroPhone />
        </div>
        <div
          className='hidden md:block '>
          <Hero />
        </div>
        <div className="mt-10">
          <Intro />
        </div>
        <div>
          <MapaTitle />
        </div>
        <div className='relative h-[80vh] ipad:h-[90vh] sm:h-[190vh] md:h-[150vh] lg:h-[110vh] xl:h-[90vh] ' >
          <motion.div
            id="info_localidad"
            style={
              { zIndex: -1, color: 'black', background: 'rgba(0, 0, 0, 0.2)', position: "absolute", top: 0, bottom: 0, right: 0, left: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: overlayOpacity }}
            transition={{ duration: overlayDuration,
            delay:0.1}}>
            <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
              <main role="main" className=" flex-column inner cover">
                <h1 className={styles.sectionHeadText} style={{ textAlign: "center" }}>{localidad} </h1>
                <p className={`${styles.ParagraphText} mt-4 text-secondary max-w-1xl leading-[30px] `}>
                  {Frase1}
                </p>
                <div align="center">

                  {showVideo == 1 && (
                    <iframe
                      className='mt-10 rounded-lg  border-[#0B144B] border-[15px] relative text-align-center aspect-video sm:w-[80%] md:w-[70%] ipad:w-[90%]  lg:w-[90%] xl:w-[50%]'

                      src={`${urlLocalidad}?controls=1&fs=1&rel=0&modestbranding=1&autoplay=${overlayOpacity ? 1: 0}`}
                      allowFullScreen
                      >
                    </iframe>
                  )}
                </div >
                <div className="absolute top-0 right-0 mr-5">
                  <a href="#" className="flex mt-5 bg-[rgb(11,20,75,0.8)]  py-3 px-3 rounded-full outline-none  cursor-pointer"
                    onClick={(e) => { e.preventDefault(); disableOverlay(); }}>
                    <img
                      src={close}
                      className='w-[20] h-[20] object-contain'
                    />
                  </a>
                </div>
                
              </main>
            </div>

          </motion.div>

          <motion.div variants={MapaVariant()}
          className='relative h-[80vh] md:h-[90vh] sm:h-[90vh] xl:h-[90vh] lg:h-[90vh] '
          >
            <Mapa DEFAULT_SCALE={DEFAULT_SCALE} HOVER_SCALE={HOVER_SCALE} Scale={Scale} x_mapa={x} y_mapa={y} handleLocalidadClick={handleLocalidadClick} />
          </motion.div>
        </div>
        <div className="mt-10">
          <Autores />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
