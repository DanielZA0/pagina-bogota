import { BrowserRouter } from "react-router-dom";

import { Intro, Hero, Navbar, Autores, Mapa, MapaTitle, HeroPhone} from "./components";
import { styles } from "./styles";
import React, { useState } from "react";
import { close, logo_loclaidades } from "./assets";
import { motion } from "framer-motion";

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


  const handleLocalidadClick = (index, personalScale, x, y, localidad, frase, url, texto) => {


    console.log(index);
    console.log(personalScale)
    setlocalidad(localidad);
    setFrase1(frase);
    seturlLocalidad(url);
    setTexto2(texto);
    setOverlayDuration(1);
    setCurrentIndex(index);
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
        <HeroPhone/>
      </div>
    
        <motion.div 
        initial = {{opacity:0}}   
        animate={{opacity:1}}
        transition = {{duration:2}}
        className='hidden md:block bg-hero-pattern bg-[length:86%_92%] bg-no-repeat bg-center'>{/*bg-[length:110%_50%] bg-[top:0]*/} 
          <Hero />
        </motion.div>

        <Intro />
        <motion.div        
        
        initial = {{opacity:0}}   
        animate={{opacity:1}}
        transition = {{duration:2}}>

        <MapaTitle />
        </motion.div>
        <div className='bg-map-back relative h-[55vh] lg:h-[100vh] sm:h-[80vh] ' >{/*style={{height: "80vh" }}*/}
          <motion.div
            id="info_localidad"
            style={
              { zIndex: -1, color: 'black', background: 'rgba(255, 0, 0, 0)', position: "absolute", top: 0, bottom:0,right: 0, left: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: overlayOpacity }}
            transition={{ duration: overlayDuration }}>
            <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
              <main role="main" className=" flex-column inner cover">
                <h1 className={styles.sectionHeadText} style={{ textAlign: "center" }}>{localidad} </h1>
                <p className={`${styles.ParagraphText} mt-4 text-secondary max-w-1xl leading-[30px] `}>
                  {Frase1}
                </p>
                <div align="center">
                  <iframe
                    className='mt-10 relative text-align-center'
                    width="50%"
                    src={urlLocalidad}>
                  </iframe>
                  <p className={`${styles.ParagraphText} mt-4 text-secondary max-w-1xl leading-[30px] text-left`}>{texto2}</p>
                </div >
                <div className="absolute top-0 right-0 mr-5">
                  <a href="#" className="flex  bg-stone-900  py-3 px-3 rounded-full outline-none  cursor-pointer"
                    onClick={(e) => { e.preventDefault(); disableOverlay(); }}>
                    <img
                      src={close}
                      className='w-[20] h-[20] object-contain'
                    />
                  </a>
                </div>
                <img
                  id="Logo info localidades"
                  src={logo_loclaidades}
                  className="w-[30%] lg:w-[25%] sm:w-[30%]"
                />
              </main>
            </div>
            
          </motion.div>
          <Mapa DEFAULT_SCALE={DEFAULT_SCALE} HOVER_SCALE={HOVER_SCALE} Scale={Scale} x_mapa={x} y_mapa={y} handleLocalidadClick={handleLocalidadClick} />

        </div>
        <div className="mt-10">
          <Autores />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
