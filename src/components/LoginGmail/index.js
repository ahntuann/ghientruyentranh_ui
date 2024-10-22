import { auth, googleProvider, signInWithPopup } from './firebaseConfig';

function LoginGmail() {
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider); // Sử dụng signInWithPopup từ firebase/auth
            const token = await result.user.getIdToken(); // Lấy Firebase ID token
            // Gửi token này lên server để xác thực
            await fetch('http://localhost:8080/testmaven/google-callback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });
        } catch (error) {
            console.error('Error during Google login', error);
        }
    };

    return <button onClick={handleGoogleLogin}>Đăng nhập với Google</button>;
}

export default LoginGmail;
