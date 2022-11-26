import React from "react";
import './sign-in.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";
import { useState } from "react";


const SignIn = () => {
    const dispatch = useDispatch()
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})
    const {email, password} = userCredentials

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(emailSignInStart(email, password))
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserCredentials({...userCredentials, [name]: value })
    }

    return (
        <div className="sign-in">
            <h2 className="title"> Exclusive Deals For You!</h2>
            <span className="subtitle">Come take a look,</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email" 
                    value={email}
                    handleChange={handleChange} 
                    label="Email" 
                    required />

                <FormInput 
                    type="password" 
                    name="password" 
                    value={password}
                    handleChange={handleChange}  
                    label="Password" 
                    required />

                <div className="form-buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={() => dispatch(googleSignInStart()) } isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}


export default SignIn;