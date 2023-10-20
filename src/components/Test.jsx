import React, { useState } from "react";
import { motion } from "framer-motion";

const SvgComponent = (props) => {
  const [Scale, setScale] = useState([1,1]);

  const handleClick = (index) => {
    setScale(Scale[index] === 1 ? 1.5 : 1)
    console.log(Scale[index]);
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 972 670"
      fill="none"
      {...props}
    >
      <motion.path
        initial={{ scale: 1 }}
        animate={{ scale: Scale }}
        fill="url(#a)"
        d="m308.822 170.799-1.965 56.295 16.623.581 42.924 34.413 54.614-35.943 3.091-34.04-115.287-21.306Z"
        onClick={()=>handleClick(0)}
        cursor="pointer"
        whileHover={Scale <= 1 ? { scale: 1.1 } : {}} // Condición para aplicar whileHover
      />
            <motion.path
        initial={{ scale: 1 }}
        animate={{ scale: Scale }}
        d="M597.846 178.593L597.948 186.535L597.846 192.011L612.658 193.862L613.944 199.777C613.944 199.777 613.061 232.88 616.593 233.321C620.125 233.761 623.654 236.853 622.771 199.777L638.661 185.214V178.593H597.846Z"
        fill="url(#a)"
        onClick={()=>handleClick(1)}
        cursor="pointer"
        whileHover={Scale <= 1 ? { scale: 1.1 } : {}} // Condición para aplicar whileHover
      />
      <defs>
        <pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
          <use xlinkHref="#c" transform="matrix(.0018 0 0 .00244 -.073 -.079)" />
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
