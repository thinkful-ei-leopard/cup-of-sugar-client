import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Button from '../Button/Button';
import './Dashboard.modules.scss';

// TODO --> wrap button in Link to add-post view

export class Dashboard extends Component {
  render() {
    return (
      <section>
        <Button className="add-post-button" />

        <div className="bulletin-container">
          <div className="bulletin-column-headers"></div>
        </div>
      </section>
    );
  }
}

export default Dashboard;
