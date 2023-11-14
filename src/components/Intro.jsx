import React from "react";
import { resume } from "../assets";
import { styles } from "../Styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const Intro = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={{fontFamily:"Crazy"}}>
          INTRODUCCIÓN
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)} className={styles.ParagraphText}> {/*' mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'*/}
        El libro que nos sumerge en las historias de nuestra amada ciudad fue un proyecto construido con una dedicación apasionada hacia nuestro entorno urbano. Su creación fue un viaje emocionante a través de los rincones y recovecos de la ciudad, una exploración que involucró a numerosos escritores, investigadores, y amantes de la historia local.
        <br className='sm:block hidden' />
        Para dar vida a este libro, primero se realizó una exhaustiva investigación en archivos históricos, bibliotecas y entrevistas con residentes de la ciudad que compartieron sus recuerdos y experiencias personales. Estos testimonios se convirtieron en una parte esencial de la narrativa, capturando la autenticidad y la riqueza de las vivencias de la gente común que ha sido testigo de la evolución de la ciudad a lo largo de los años.
        <br className='sm:block hidden' />
        Los escritores, cada uno con su estilo único, aportaron su voz al proyecto, creando relatos que abarcaban desde anécdotas cotidianas hasta eventos trascendentales que habían dejado una huella imborrable en la historia de la ciudad. Fue un proceso colaborativo en el que se tejieron las historias individuales en un tapiz coherente que capturaba la esencia de la ciudad y su espíritu vibrante.
      </motion.p>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)} className=' mt-4 text-secondary text-[17px] max-w-1xl leading-[30px]'>
        El libro que nos sumerge en las historias de nuestra amada ciudad fue un proyecto construido con una dedicación apasionada hacia nuestro entorno urbano. Su creación fue un viaje emocionante a través de los rincones y recovecos de la ciudad, una exploración que involucró a numerosos escritores, investigadores, y amantes de la historia local.
        <br className='sm:block hidden' />
        Para dar vida a este libro, primero se realizó una exhaustiva investigación en archivos históricos, bibliotecas y entrevistas con residentes de la ciudad que compartieron sus recuerdos y experiencias personales. Estos testimonios se convirtieron en una parte esencial de la narrativa, capturando la autenticidad y la riqueza de las vivencias de la gente común que ha sido testigo de la evolución de la ciudad a lo largo de los años.
        <br className='sm:block hidden' />
        Los escritores, cada uno con su estilo único, aportaron su voz al proyecto, creando relatos que abarcaban desde anécdotas cotidianas hasta eventos trascendentales que habían dejado una huella imborrable en la historia de la ciudad. Fue un proceso colaborativo en el que se tejieron las historias individuales en un tapiz coherente que capturaba la esencia de la ciudad y su espíritu vibrante.
      </motion.p> */}

      <motion.div variants={textVariant()}>
        <div className='text-black mt-5 bg-[rgb(11,20,75,0.5)] py-3 px-8 rounded-xl outline-none w-fit  hover:text-white text-[18px] border cursor-pointer hover:border-[#0B144B] hover:border-[3px]' >
          <a className='btn' href={resume} download="resume.pdf" >
            Descarga nuestra investigación
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Intro, "Intro");