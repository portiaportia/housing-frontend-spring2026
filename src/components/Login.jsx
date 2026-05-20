import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/clerk-react";
import "../css/Login.css";

const Login = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
          <button id="login-button">Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className="user-button">
            <UserButton />
        </div>
      </SignedIn>
    </div>
  );
};

export default Login;