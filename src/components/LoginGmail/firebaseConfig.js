import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDFQxQ7dcUcufM_5ShIUUhYH0LyYFnJfsM',
    authDomain: 'fir-credentials-b7b1a.firebaseapp.com',
    projectId: 'fir-credentials-b7b1a',
    storageBucket: 'fir-credentials-b7b1a.appspot.com',
    messagingSenderId: '409838527137',
    appId: '1:409838527137:web:34e52bab8ad81eda2486e0',
    measurementId: 'G-C6KYJ9ZNEK',
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Khởi tạo Auth và Google Auth Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup };
