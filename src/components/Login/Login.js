import React, { useContext, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ProductContext } from "../../App";
import { Link, useLocation, useNavigate } from "react-router";
const provider = new GoogleAuthProvider();
const Login = () => {
  const userContext = useContext(ProductContext);
  const { isLogedIn, setIsLogedIn } = userContext[1];
  const { user, setUser } = userContext[2];
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    console.log("clicked");
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        setUser(user);
        setIsLogedIn(true);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleLogIn} className="w-25 mx-auto">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="w-100 btn-primary py-2 px-4">
          Login
        </button>
        <br />
      </form>
      <div className="d-flex justify-content-center">
        {" "}
        <button
          className="w-25 mt-4 btn-primary py-2 px-4"
          onClick={handleLoginWithGoogle}
        >
          Login with Google
        </button>
      </div>
      <p className="text-center mt-2">
        Register a new account?{" "}
        <Link className="color-primary" to="/signup">
          Create
        </Link>
      </p>
    </div>
  );
};

export default Login;
