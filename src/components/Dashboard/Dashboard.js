import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Dashboard.module.scss';

// TODO --> wrap button in Link to add-post view

export class Dashboard extends Component {
  render() {
    return (
      <section className={styles.Dashboard}>
      {/* <h2>Cup of Sugar</h2> */}

        <Button className={styles.addPostButton}>Add Post</Button>
        <div className={styles.bulletinContainer}>
          <div className="bulletin-column-headers"></div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
