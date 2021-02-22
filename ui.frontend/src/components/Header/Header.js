//Header.js
import React, {Component} from 'react';
import newsroomLogo from '../../media/logo--uhc.svg';
require('./Header.scss');

export default class Header extends Component {
  get logo() {
    return (
      <div className="Logo">
        <img className="logo-img" src={newsroomLogo} alt="WKND SPA" />
      </div>
    );
  }

  get date() {
    return (
      <div className="date-container">
        <div>March 21-22, 2021</div>
        <div>7 am PST / 10 am EST / 4pm CET</div>
      </div>
    );
  }

  render() {
    return (
      <header className="Header Text Medium-size">
        <div className="Header-container">
          {this.logo}
          <div className="subtitle">Congress</div>
        </div>
        {this.date}
      </header>
    );
  }
}