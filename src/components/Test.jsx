import React, { useState } from "react";
import { motion } from "framer-motion";

const SvgComponent = (props) => {
  
  const DEFAULT_SCALE = 1;

  const HOVER_SCALE = 1.1;
  const MAX_SCALE = 10;

  const localidades = 2;

  const [Scale, setScale] = useState( OnesVector() );

  function OnesVector() {
    return Array.from(Array(localidades), () => 1);
  }

  const handleClick = (index) => {

    const elementToMove = document.getElementById(`${index}`);
    const elementParent = document.getElementById("svg_map");
    elementParent.appendChild(elementToMove);

    let prev_scale = Scale[index];

    let scale_vector = OnesVector();
    scale_vector[index] = prev_scale == MAX_SCALE ? DEFAULT_SCALE : MAX_SCALE;

    setScale( scale_vector );

  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="svg_map"
      width="100%"
      height="100%"
      viewBox="0 0 972 670"
      fill="none"
      {...props}
    >
      <motion.path
        id="0"
        initial={{ scale: 1 }}
        animate={{ scale: Scale[0] }}
        fill="#000000"
        d="m308.822 170.799-1.965 56.295 16.623.581 42.924 34.413 54.614-35.943 3.091-34.04-115.287-21.306Z"
        onClick={()=>handleClick(0)}
        cursor="pointer"
        whileHover={Scale[0] <= DEFAULT_SCALE ? { scale: HOVER_SCALE } : {}} // Condición para aplicar whileHover
      />
            <motion.path
        id="1"
        initial={{ scale: 1 }}
        animate={{ scale: Scale[1] }}
        d="M597.846 178.593L597.948 186.535L597.846 192.011L612.658 193.862L613.944 199.777C613.944 199.777 613.061 232.88 616.593 233.321C620.125 233.761 623.654 236.853 622.771 199.777L638.661 185.214V178.593H597.846Z"
        fill="url(#a)"
        onClick={()=>handleClick(1)}
        cursor="pointer"
        whileHover={Scale[1] <= DEFAULT_SCALE ? { scale: HOVER_SCALE } : {}} // Condición para aplicar whileHover
      />
      <defs>
        <pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
          <use id="use" xlinkHref="#c" transform="matrix(.0018 0 0 .00244 -.073 -.079)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgo..."
          id="c"
          width={626}
          height={506}
        />
      </defs>
    </motion.svg>
  );
};

export default SvgComponent;
