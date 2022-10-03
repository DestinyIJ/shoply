import React from "react";
import './sign-up.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("Password do not match!")
            return;
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log('user credential', userCredential)
                console.log('user', userCredential.user)
                return userCredential.user;
            })
            .catch((error) => {
                console.error(error)
            });
            await createUserProfileDocument(user, { displayName });
            this.setState (
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            )
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">Want To Look Fly?</h2>
                <span className="subtitle">Sign Up With Us Now!</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                            type="text"
                            name="displayName" 
                            value={displayName}
                            handleChange={this.handleChange} 
                            label="Display Name" 
                            required />
                    <FormInput
                        type="email"
                        name="email" 
                        value={email}
                        handleChange={this.handleChange} 
                        label="Email" 
                        required />

                    <FormInput 
                        type="password" 
                        name="password" 
                        value={password}
                        handleChange={this.handleChange}  
                        label="Password" 
                        required />

                    <FormInput 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword}
                        handleChange={this.handleChange}  
                        label="Confirm Password" 
                        required />

                    <div className="form-buttons">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;