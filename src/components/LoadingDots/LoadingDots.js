import React, { Component } from 'react';
import styles from './LoadingDots.module.scss';

export class LoadingDots extends Component {
  render() {
    return (
      <div className={styles.loadingDots}>
        <div className={styles.loadingDotsDot}></div>
        <div className={styles.loadingDotsDot}></div>
        <div className={styles.loadingDotsDot}></div>
      </div>
    );
  }
}

export default LoadingDots;
