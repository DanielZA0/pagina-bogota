import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import DanielaV from '../assets/DanielaV.jpg';
import CamilaH from '../assets/CamilaH.jpg';

const Autores = () => {
  return (
    <>

      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText}`}>Autores</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)} className=' mt-4 text-secondary text-[17px]  leading-[30px]'>
        Electronic engineer with emphasis in digital signals and artificial intelligence from Pontificia Universidad Javeriana. In my career, I have learned low and high level programming languages for advanced data processing and visualization. All this I have worked following the path of discipline, responsibility and leadership, the latter being a determining factor in the success of my projects. I am a persevering person, who looks for concrete solutions and easy execution.  I emphasize my honesty and flexibility to adapt to different technologies required by projects or tasks.
      </motion.p>
      <div className="mt-10 flex ">
        <img
          src={CamilaH}
          alt="Descripción de la imagen"
          style={{
            width: '20%',
            height: '10%',
            border: '2px solid #333',
          }}
        />
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mx-2   text-secondary text-[17px]  leading-[30px] text-left mr-20  '
        >
          El libro que nos sumerge en las historias de nuestra amada ciudad fue un proyecto construido con una dedicación apasionada hacia nuestro entorno urbano. Su creación fue un viaje emocionante a través de los rincones y recovecos de la ciudad, una exploración que involucró a numerosos escritores, investigadores y amantes de la historia local.
        </motion.p>

      </div>


      <div className="mt-10 flex ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mx-2 text-secondary text-[17px]  leading-[30px] text-right ml-20 text-justify  '
        >
          El libro que nos sumerge en las historias de nuestra amada ciudad fue un proyecto construido con una dedicación apasionada hacia nuestro entorno urbano. Su creación fue un viaje emocionante a través de los rincones y recovecos de la ciudad, una exploración que involucró a numerosos escritores, investigadores y amantes de la historia local.
        </motion.p>
        <img
          src={CamilaH}
          alt="Descripción de la imagen"
          className = "object-cover"
          style={{
            width: '20%',
            height: '10%',
            border: '2px solid #333',
          }}
        />
      </div>
    </>
  )
}

export default SectionWrapper(Autores, "Autores");
