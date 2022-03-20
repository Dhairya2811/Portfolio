import React from 'react';
import ProjectDisplay from '../ProjectDisplay/ProjectDisplay';
import styles from './Projects.module.css';
import SA from '../../Images/SAsymbol.ico';


const Projects = () => {
  return (<div id="projects" className={styles.Projects}>
    <div className={styles.Title}>
      <h1>Latest Projects</h1>
      <div className={styles.project_container}>
        <ProjectDisplay img={SA} />
      </div>
    </div>
  </div>);
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
