import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const backdrop = ({
  onClick
}) =>
  ReactDOM.createPortal(
    <div
      className={'backdrop'}
      onClick={onClick}
    />,
    document.getElementById('backdrop-root')
  );

export default backdrop;

