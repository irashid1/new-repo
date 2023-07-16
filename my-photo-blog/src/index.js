import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlO7Fg071Qzeje5lnYPv2ta9TO4U-1rVk",
  authDomain: "my-full-stack-photo-blog.firebaseapp.com",
  projectId: "my-full-stack-photo-blog",
  storageBucket: "my-full-stack-photo-blog.appspot.com",
  messagingSenderId: "65281656573",
  appId: "1:65281656573:web:e30b45dd9ceba1e88c2094",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
