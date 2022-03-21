import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styles from './ContactInfo.module.css';

const ContactInfo = () => (
  <div className={styles.ContactInfo} id="contact">
    <div className={styles.title}>
    <h1><AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>Contact Me</AnimationOnScroll></h1>
      <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
        <div className={styles.contactInfo}>
          <div className={styles.email}>
              <h5>Email</h5>
              <p>dhairya.jobmail@gmail.com</p>
          </div>  
          <div className={styles.phoneNumber}>
            <h5>Phone No.</h5>  
            <p>+1 (437) 240 5686</p>
          </div>  
          <div className={styles.location}>
            <h5>Location</h5>  
            <p>Hamilton, ON.</p>
          </div>  
        </div>
      </AnimationOnScroll>
    </div>
  </div>
);

ContactInfo.propTypes = {};

ContactInfo.defaultProps = {};

export default ContactInfo;
