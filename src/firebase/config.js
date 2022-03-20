import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
	apiKey: "AIzaSyB11tQwJ52764UBfOEUX2Q2Gd-l7CZlRMQ",
	authDomain: "portfolio-de8c5.firebaseapp.com",
	projectId: "portfolio-de8c5",
	storageBucket: "portfolio-de8c5.appspot.com",
	messagingSenderId: "430844556952",
	appId: "1:430844556952:web:05d9cb5056ff0ab2f842ed",
	measurementId: "G-SFYKN3YP7B",
}

initializeApp(firebaseConfig)

const db = getFirestore()

export { db }
