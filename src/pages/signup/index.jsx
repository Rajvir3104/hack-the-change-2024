import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const clientId = process.env.REACT_APP_CLIENT_ID;

const Signup = () => {
    const navigate = useNavigate();  // Initialize navigate function

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                text="Sign Up"  // Change the button text to "Sign Up"
                onSuccess={(credentialResponse) => {
                    console.log("SIGN UP SUCCESS! Current User:", credentialResponse);

                    // Navigate to the desired page (e.g., Dashboard after signing up)
                    navigate('/dashboard');  // Change this to your desired route
                }}
                onError={() => {
                    console.log("SIGN UP FAILED!");
                }}
                style={{
                    width: 'auto',  // Auto width for button to adjust based on content
                    fontSize: '14px', // Smaller font size
                    padding: '8px 16px', // Adjust padding for smaller button
                    borderRadius: '4px' // Optional: to make the button corners rounded
                }}
            />
        </GoogleOAuthProvider>
    );
}

export default Signup;
