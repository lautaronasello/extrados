import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

var firebaseConfig = {
  apiKey: 'AIzaSyCKZYD_YnH37fp4Pb3pnHHfsx5udY40hBA',
  authDomain: 'extrados-3c5d9.firebaseapp.com',
  projectId: 'extrados-3c5d9',
  storageBucket: 'extrados-3c5d9.appspot.com',
  messagingSenderId: '87360591869',
  appId: '1:87360591869:web:cee42d8a8606c6b8142b94',
  measurementId: 'G-84L769H3EC',
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
