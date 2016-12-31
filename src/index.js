import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Main global stylesheet
import './styles/index.css';
import router from './router';

render(
  <Router
    history={browserHistory}
    routes={router}
  />,
  document.getElementById('root'),
);
