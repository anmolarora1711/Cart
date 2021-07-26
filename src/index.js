import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCm_JKRJiPBGfiRJWm8DFG3Hl8hjr7mFlo",
	authDomain: "cart-55565.firebaseapp.com",
	projectId: "cart-55565",
	storageBucket: "cart-55565.appspot.com",
	messagingSenderId: "862467509351",
	appId: "1:862467509351:web:6ae52d6775c5e064df18c2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
