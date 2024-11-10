import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const clientId = process.env.REACT_APP_CLIENT_ID;

const Login = () => {
    const navigate = useNavigate();  // Initialize navigate function

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log("LOGIN SUCCESS! Current User:", credentialResponse);

                    // Navigate to the desired page (e.g., Dashboard)
                    navigate('/dashboard');  // Change this to your desired route
                }}
                onError={() => {
                    console.log("LOGIN FAILED!");
                }}
            />
        </GoogleOAuthProvider>
    );
}

export default Login;
