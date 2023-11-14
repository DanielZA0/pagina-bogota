import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../Styles";
import { fadeIn, textVariant } from "../utils/motion";

const MapaTitle = () => {
    return (
        <>        

<motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{fontFamily:"Crazy"}}>
          MAPA
        </h2>
      </motion.div>
        </>
    )
}

export default SectionWrapper(MapaTitle, "MapaTitle");
