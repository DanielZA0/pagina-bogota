import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";


const Autores = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
Welcome to the projects section, where you'll find brief descriptions of my work, complete with links to code repositories and live demos. These projects provide concrete illustrations of my problem-solving abilities, proficiency with various technologies, and effective project management..
        </motion.p>
      </div>

      {/* <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}

    
    </>

  )
}

export default SectionWrapper(Autores,"Autores");