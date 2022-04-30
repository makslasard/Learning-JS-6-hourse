import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarverlService from './services/MarvelService';
import './style/style.scss';

const marvelService = new MarverlService()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

