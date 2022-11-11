import React from "react";
import './sign-up.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";

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
        const { signUpStart } = this.props
        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("Password do not match!")
            return;
        }

        signUpStart({email, password, displayName})
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

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);