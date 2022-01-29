import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import styles from './HomeComponent.module.css';
import background from '../../Images/titleBackground2.png';

class HomeComponent extends React.Component{
  render(){
  return(
  <div id='homePage' className={styles.HomeComponent}>
    <div className={styles.titleBackground}>
      <img className={styles.titleBackgroundImage} src={background} height={window.innerHeight}/>
    </div>
    <div className={styles.titleText}>
      <div className="animate__animated animate__fadeInDown animate__delay-1s"><div>Hello There, I'm</div></div>
      <div className="animate__animated animate__fadeInLeft animate__delay-2s"><div className={styles.biggerFontTitle}>Dhairya Soni</div></div>
      <TypeWriterEffect
            startDelay={3000}
            cursorColor="white"
            multiText={[
              'a Web Developer',
            ]}
            multiTextDelay={2100}
            typeSpeed={170}
            hideCursorAfterText={true}
          />
      <div className="animate__animated animate__bounceInDown animate__delay-5s">
        <div className={styles.downArrowDiv}>
            <a href='#aboutPage' className={styles.homepageLinks}><i class="fa fa-angle-double-down"></i></a>
        </div>
      </div>
    </div>
  </div>);
}}

export default HomeComponent;