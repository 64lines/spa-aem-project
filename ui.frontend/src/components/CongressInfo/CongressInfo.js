import React from 'react';
require('./CongressInfo.scss');

const CongressInfo = () => {
  return (
    <div>
      <div className="congress-info">
        <div className="container-days-speakers">
          <CongressItem number={10} text={"Days"}/>
          <CongressItem number={"50+"} text={"Speakers"}/>
        </div>
        <div className="container-profession">
          <CongressItem number={"40+"} text={"Healthcare specialists"}/>
        </div>
      </div>
      <div className="btn-container">
        <div>
          <a href="/" className="btn btn-primary" aria-label="Watch Livestream">Watch Livestream</a>
        </div>
        <div>
          <a href="/" className="btn btn-secondary" aria-label="Watch Livestream">Registration</a>
        </div>
      </div>
    </div>
  );
};

const CongressItem = ({ number, text }) => {
  return (
    <div className="congress-item">
      <span>{number}</span>
      <div className="item-text">{text}</div>
    </div>
  );
};

export default CongressInfo;