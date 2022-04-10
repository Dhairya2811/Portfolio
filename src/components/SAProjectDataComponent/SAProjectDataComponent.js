import React from 'react';
import PropTypes from 'prop-types';
import styles from './SAProjectDataComponent.module.css';
import { Button } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ProjectInLaptop from "../../Images/SAProjectLaptop.png";


var skills = ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Django", "SQLite"]
const SAProjectDataComponent = ({ getFromChild }) => {
  const click = ()=>{
    console.log("Dhairya");
    getFromChild("back From Child");
  }
  return (<div className={styles.SAProjectDataComponent}>
    <div className={styles.landingDiv}>
      <div className={styles.aboutProject}>
        <h1 className={styles.projectTitle}>Seller Agent</h1>
        <div className={styles.aboutSAProject}>
          <p>
            <strong>Seller Agent</strong> is a platform, which connectes the buyers and sellers. 
            I had an idea, which will be helpful to sellers to sell new or used
            items. On this platform, a person can perform a role of buyer and 
            seller using same account. 
          </p>
          <p>
            I was inspired by Facebook Marketplace and Amazon to develop simmilar type of platform.
          </p>
          <p>
            Feel free to visit the project by clicking on <strong>SA button</strong>.
          </p>
        </div>
        <Button href="https://dhairyasonicapstoneproject.herokuapp.com/" target='_black' className={styles.button}>SA</Button>
      </div>
    </div>
    <div className={styles.projectInfo}>
      <div className={styles.projectLaptop}>
        <img className={styles.ProjectImage} src={ProjectInLaptop} />
      </div>
      <div className={styles.projectSkills}>
        {skills.map(skill=>(
          <span className={styles.SkillComponent}>{skill}</span>
        ))}
      </div>
      <div className={styles.buttonLinks}>
        <Button href="https://dhairyasonicapstoneproject.herokuapp.com/" target='_black' className={styles.lastSAButton}>SA</Button>
        <Button variant="outline-secondary" className={styles.backButton} onClick={click}><span className={styles.leftArrow}>&#8678;</span> Back</Button>
      </div>
      <div className={styles.adjustDiv}></div>
    </div>
  </div>);
}

SAProjectDataComponent.propTypes = {};

SAProjectDataComponent.defaultProps = {};

export default SAProjectDataComponent;
