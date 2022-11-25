import React, { Component } from 'react';
import {handleChange, submitHandler} from '../formHandlers';
import ConfirmBtn from '../ConfirmBtn';
import styles from '../index.module.scss';

const initialState = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = structuredClone(initialState);
    }
             
    passwordCheck = () => this.state.password === this.state.passwordConfirmation;

    render() {
        const { 
            firstName, 
            lastName, 
            displayName, 
            email, 
            password, 
            passwordConfirmation 
        } = this.state;
        const signedUser = {firstName, lastName, displayName, email, password};
        const {appStateHandler} = this.props;
        return (
            <form onSubmit={ event => {
                    this.passwordCheck() && 
                        submitHandler(event, appStateHandler, signedUser);     
                }
            }>
                 <div className={styles.inputSection}>
                    <input className={styles.example} 
                        name="firstName"
                        value={firstName}
                        onChange={event => this.setState(handleChange(event))}
                        placeholder="firstName" 
                        type="text" 
                    />  
                    <input className={styles.example}
                        name="lastName"
                        value={lastName}
                        onChange={event => this.setState(handleChange(event))}
                        placeholder="Last Name" 
                        type="text" 
                    />    
                </div>
                <div className={styles.inputSection}>
                    <input className={styles.example}
                        name="displayName"
                        value={displayName}
                        onChange={event => this.setState(handleChange(event))}
                        placeholder="Display Name" 
                        type="text" 
                    />  
                    <input className={styles.example}
                        name="email"
                        value={email}
                        onChange={event => this.setState(handleChange(event))}
                        placeholder="Email Address" 
                        type="email" 
                    />    
                </div>
                <div className={styles.inputSection}>
                    {!this.passwordCheck() && <p>Passwords don't match</p>}
                    <input className={styles.example}
                        name="password"
                        value={password} 
                        onChange={event => this.setState(handleChange(event))}
                        placeholder="Password" 
                        type="password"
                    />
                    <input className={styles.example}
                        name="passwordConfirmation"
                        value={passwordConfirmation} 
                        onChange={event => this.setState(handleChange(event))}
                        placeholder="Password Confirmation" 
                        type="password"
                    />
                </div>
                <div className={styles.inputSection}>
                    <ConfirmBtn btnName="Create account"/>
                </div>
            </form>
        );
    }
}

export default SignupForm;
