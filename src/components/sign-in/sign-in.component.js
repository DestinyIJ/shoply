import React from "react";
import './sign-in.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle  } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from "firebase/auth";


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state
        
        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.setState (
                {
                    email: '',
                    password: '',
                }
            )
        } catch (error) {
            console.error(error)
        }
        this.setState (
            {
                email: '',
                password: '',
            }
        )
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title"> Exclusive Deals For You!</h2>
                <span className="subtitle">Come take a look,</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email" 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label="Email" 
                        required />

                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}  
                        label="Password" 
                        required />

                    <div className="form-buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={ signInWithGoogle } isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;