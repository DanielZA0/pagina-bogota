import React from "react";
import { motion } from "framer-motion";
import { styles } from "../Styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import DanielaV from '../assets/DanielaV.jpg';
import CamilaH from '../assets/CamilaH.jpg';

const Autores = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText}`} style={{fontFamily:"Crazy"}}>AUTORES</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)} className = {`mt-4 text-secondary  ${styles.ParagraphText}`}>
        Electronic engineer with emphasis in digital signals and artificial intelligence from Pontificia Universidad Javeriana. In my career, I have learned low and high level programming languages for advanced data processing and visualization. All this I have worked following the path of discipline, responsibility and leadership, the latter being a determining factor in the success of my projects. I am a persevering person, who looks for concrete solutions and easy execution.  I emphasize my honesty and flexibility to adapt to different technologies required by projects or tasks.
      </motion.p>
      <div className="mt-10">
        <img
          src={CamilaH}
          alt="Descripción de la imagen"
          className = "rounded-2xl float-left w-[30%] h-[30%] p-2 "
        />
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.ParagraphText}  `}
        >
          El libro que nos sumerge en las historias de nuestra amada ciudad fue un proyecto construido con una dedicación apasionada hacia nuestro entorno urbano. Su creación fue un viaje emocionante a través de los rincones y recovecos de la ciudad, una exploración que involucró a numerosos escritores, investigadores y amantes de la historia local.
        </motion.p>

      </div>


      <div className="pt-[15%] lg:pt-[30%] ">
        <img
          src={CamilaH}
          alt="Descripción de la imagen"
          className = "rounded-2xl float-right w-[30%] h-[30%] p-2"
        />
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.ParagraphText} text-right  `}
        >
          El libro que nos sumerge en las historias de nuestra amada ciudad fue un proyecto construido con una dedicación apasionada hacia nuestro entorno urbano. Su creación fue un viaje emocionante a través de los rincones y recovecos de la ciudad, una exploración que involucró a numerosos escritores, investigadores y amantes de la historia local.
        </motion.p>
        
      </div>
    </>
  )
}

export default SectionWrapper(Autores, "Autores");
