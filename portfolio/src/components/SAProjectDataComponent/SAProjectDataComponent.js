import React from 'react';
import PropTypes from 'prop-types';
import styles from './SAProjectDataComponent.module.css';

const SAProjectDataComponent = () => (
  <div className={styles.SAProjectDataComponent}>
    <p>Enter Project data</p>

    <a href='https://dhairyasonicapstoneproject.herokuapp.com/'>Click Here</a>
  </div>
);

SAProjectDataComponent.propTypes = {};

SAProjectDataComponent.defaultProps = {};

export default SAProjectDataComponent;
