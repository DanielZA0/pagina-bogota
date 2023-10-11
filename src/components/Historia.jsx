import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import  Interactive  from './mapa/InteractiveMap';


const Historia = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <h2 className={`${styles.sectionHeadText} text-center`}>
          Mapa
        </h2>
      </motion.div>
      <div className = 'justify-content-center'>
      <Interactive/>
      </div>


      {/* <div className={`${styles.sectionHeadText} mt-20 flex flex-col`}>

      </div> */}
    </>
  );
};


export default SectionWrapper(Historia, "Historia");
