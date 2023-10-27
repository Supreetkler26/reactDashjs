import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCkDP6vJ6klfKdJynJZ04BYUNwPdxMIXHE",
  authDomain: "react-dashboard-9aaf9.firebaseapp.com",
  projectId: "react-dashboard-9aaf9",
  storageBucket: "react-dashboard-9aaf9.appspot.com",
  messagingSenderId: "148305431325",
  appId: "1:148305431325:web:970566c6603d19b5422ff4",
  measurementId: "G-26043XP1LS"
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp({
  apiKey: "AIzaSyCkDP6vJ6klfKdJynJZ04BYUNwPdxMIXHE",
  authDomain: "react-dashboard-9aaf9.firebaseapp.com",
  projectId: "react-dashboard-9aaf9",
  storageBucket: "react-dashboard-9aaf9.appspot.com",
  messagingSenderId: "148305431325",
  appId: "1:148305431325:web:970566c6603d19b5422ff4",
  measurementId: "G-26043XP1LS"
})
// const auth = getAuth(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
