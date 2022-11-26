import React, { useState } from "react";
import './sign-up.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";

const SignUp = () => {
    const dispatch = useDispatch()
    const [signUpCredentials, setSignUpCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword }= signUpCredentials
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password.length> 5 && password !== confirmPassword) {
            alert("Password must be 6 characters or more and must match")
            return;
        }
        
        dispatch(signUpStart({email, password, displayName}))
    }


    const handleChange = (event) => {
        const { name, value } = event.target
        setSignUpCredentials({...signUpCredentials, [name] : value})
    }

    return (
        <div className="sign-up">
            <h2 className="title">Want To Look Fly?</h2>
            <span className="subtitle">Sign Up With Us Now!</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                        type="text"
                        name="displayName" 
                        value={displayName}
                        handleChange={handleChange} 
                        label="Display Name" 
                        required />
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

                <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword}
                    handleChange={handleChange}  
                    label="Confirm Password" 
                    required />

                <div className="form-buttons">
                    <CustomButton type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </div>
    )
}


export default SignUp;