import React from "react";

import { SignInAndSignUpContainer } from "./signin-and-signup.styled";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => {
    return (
        <SignInAndSignUpContainer>
            <SignUp />
            <SignIn />  
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUpPage;