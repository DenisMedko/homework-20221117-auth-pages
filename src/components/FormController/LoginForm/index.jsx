import React, { Component } from 'react';
import { handleChange, submitHandler } from '../formHandlers';
import ConfirmBtn from '../ConfirmBtn';
import ShowPassBtn from '../ShowPassBtn';
import styles from '../index.module.scss';

const initialState = {
    email: '',
    password: '',
    rememberMe: false,
    showPassword : false,
  };

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = structuredClone(initialState);
    }
    
    render() {
        const { email, password, rememberMe, showPassword } = this.state;
        const { appStateHandler } = this.props;
        return (
            <form onSubmit={ event => submitHandler(event, appStateHandler, {email, password}) }>
                <div className={styles.inputSection}>
                    <input className={styles.example}
                        name="email"
                        value={ email }
                        onChange={ event => this.setState(handleChange(event)) }
                        placeholder="Email Address" 
                        type="email" 
                    />    
                </div>
                <div className={styles.inputSection}>
                    <input className={styles.example}
                        name="password"
                        value={ password } 
                        onChange={ event => this.setState(handleChange(event)) }
                        placeholder="Password" 
                        type={ showPassword ? "text" : "password" }
                    />
                    <ShowPassBtn status={showPassword} onClick={ () => this.setState({showPassword : !showPassword})}/>
                </div>
                <div className={styles.inputSection}>
                    <label>
                        <input 
                            name="rememberMe" 
                            checked={ rememberMe }
                            onChange={ event => this.setState(handleChange(event)) } 
                            type="checkbox"
                        /><span>Remember Me</span>
                    </label>
                </div>
                <div className={styles.inputSection}>
                    <ConfirmBtn btnName="LOGIN"/>
                </div>
            </form>
        );
    }
}

export default LoginForm;
