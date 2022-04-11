import React from 'react';
import ProjectDisplay from '../ProjectDisplay/ProjectDisplay';
import styles from './Projects.module.css';
import SA from '../../Images/SAsymbol.ico';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Projects = () => {
  return (<div id="projects" className={styles.Projects}>
    <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>
      <div className={styles.Title}>
        <h1>Latest Projects</h1>
        <div className={styles.project_container}>
          <ProjectDisplay img={SA} ID="SAProjectContainer" classInit="SA"/>
          <ProjectDisplay img={SA} ID="SAProjectContainer2"/>
          <ProjectDisplay img={SA} ID="SAProjectContainer2"/>
        </div>
      </div>
    </AnimationOnScroll>
  </div>);
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
