import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import Header from './components/Header/Header';
import CongressInfo from './components/CongressInfo/CongressInfo';
require('./components/Header/Header.scss');

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div className="back">
        <Header /> 
        <div className="conference-name">
          {this.childComponents}
          {this.childPages}  
        </div>
        <CongressInfo />
      </div>
    );
  }
}

export default withModel(App);
