import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBpUpu9pYP8uoxkseTYz75T2hT5hBscF7A',
	authDomain: 'chatgpt-messnger.firebaseapp.com',
	projectId: 'chatgpt-messnger',
	storageBucket: 'chatgpt-messnger.appspot.com',
	messagingSenderId: '471350642321',
	appId: '1:471350642321:web:bff796d534b8e65218a130',
	measurementId: 'G-PZ701ZXN6C',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
