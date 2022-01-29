import React from 'react';
import styles from './AboutComponent.module.css';

// const skills = [["HTML", "CSS", "JavaScript", "ReactJS", "jQuery"], 
//   ["Java", "C#.Net", "Python", "Django", "PHP"]]
const skills = ["html", "CSS", "JS"]

const AboutComponent = () => (
  <div id="aboutPage" className={styles.AboutComponent}>
    <div className={styles.title}>
      <h1>Personal Info</h1>
      <p>Know more about me</p>
      <div className={styles.PersonalInfo}>
        <div className={styles.Info}>
          <p>I design and build quality responsive websites, clean user interface and rich interactive web apps , 
            which leands to the success of the overall product. </p>
        </div>
        <div className={styles.Skills}>
        </div>
      </div>
    </div>
  </div>
);

AboutComponent.propTypes = {};

AboutComponent.defaultProps = {};

export default AboutComponent;
