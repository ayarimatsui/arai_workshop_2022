import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDjX7lW5Zg27EpcQ6U8Uu800AIAYDFAuYk",
	authDomain: "workshop-test-e6ef8.firebaseapp.com",
	projectId: "workshop-test-e6ef8",
	storageBucket: "workshop-test-e6ef8.appspot.com",
	messagingSenderId: "981801377261",
	appId: "1:981801377261:web:372f9210a2e9c2bcbc1be4"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
