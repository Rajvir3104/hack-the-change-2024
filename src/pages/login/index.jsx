import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './style.css'; // Import a CSS file to style the button

const clientId = process.env.REACT_APP_CLIENT_ID;

const Login = () => {
    const navigate = useNavigate();  // Initialize navigate function

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                text="Login"  // Set text to "Login" for the button
                onSuccess={(credentialResponse) => {
                    console.log("LOGIN SUCCESS! Current User:", credentialResponse);

                    // Navigate to the desired page (e.g., Dashboard)
                    navigate('/dashboard');  // Change this to your desired route
                }}
                onError={() => {
                    console.log("LOGIN FAILED!");
                }}
                useOneTap // Optional: Enables one-tap login for users who have used Google login before.
                // Adding the className will help style it via external CSS
                className="custom-login-button"
            />
        </GoogleOAuthProvider>
    );
}

export default Login;
