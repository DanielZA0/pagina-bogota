import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import  Interactive  from './mapa/InteractiveMap';

const Historia = ({ FuncInput }) => {

  return (
    <>
      <motion.div variants={textVariant()}>

        <h2 className={`${styles.sectionHeadText} text-center`}>
          Mapa
        </h2>
      </motion.div>
      <div className = 'justify-content-center'>
      <Interactive onClickShowOverlay_={FuncInput}/>
      </div>

      {/* <div className={`${styles.sectionHeadText} mt-20 flex flex-col`}>

      </div> */}
    </>
  );
};

export default Historia
//export default SectionWrapper(Historia, "Historia");