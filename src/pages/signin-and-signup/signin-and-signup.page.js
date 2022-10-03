import React from "react";
import './signin-and-signup.style.scss';
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignUp />
            <SignIn />  
        </div>
    )
}

export default SignInAndSignUpPage;