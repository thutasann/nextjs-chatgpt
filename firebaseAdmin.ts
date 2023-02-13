import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';
import { getApp } from 'firebase/app';

const serviceAccount = JSON.parse(
	process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string,
);

if (!getApps().length) {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
	});
}

const adminDB = admin.firestore();

export { adminDB };
