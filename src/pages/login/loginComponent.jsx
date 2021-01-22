import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CustomButton from "../../components/custom-button/customButtonComponent";
import { db, auth } from "../../firebase/firebase.utls";
import "./login.style.css";

const LoginPage = () => {
    const history = useHistory();
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const {email, password} = input;
    const handleChange = e => {
        const {value, name} = e.target;
        setInput({...input, [name]: value});
    }
    const handleSignin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => auth && history.push("/")).catch(error => alert(error.message));
    }
    const handleRegister = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(auth => auth && history.push("/"));
    }
	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
					alt="logo"
                    className="login__logo"
				/>
			</Link>
            <div className="login__container">
                <h1>Sign-In</h1>

                <form onSubmit={handleSignin}>
                    <h5>E-Mail</h5>
                    <input type="text" name="email" onChange={handleChange}/>
                    <h5>Password</h5>
                    <input type="password" name="password" onChange={handleChange}/>
                    <CustomButton type="submit" className="login__signInButton">Sign In</CustomButton>
                </form>
                <p>
                    By signing-in you agree to Amazon-Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <CustomButton onClick={handleRegister} className="login__registerButton">Create your Amazon-Clone Account</CustomButton>
            </div>
		</div>
	);
};

export default LoginPage;
