import React from 'react';
import GiveIcon from '../Icons/GiveIcon';
import styles from './WelcomeDisplay.module.scss';

function WelcomeDisplay() {
  return (
    <div>
      <GiveIcon className={styles.GiveIcon} />
      <h1 className={styles.cupOfSugarHeader}>Cup of Sugar</h1>
      <p className={styles.tagline}>When you need a helping hand.</p>
    </div>
  );
}

export default WelcomeDisplay;
