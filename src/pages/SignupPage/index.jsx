import React from 'react';
import SignupForm from '../../components/FormController/SignupForm'; 
import styles from '../index.module.scss';

const SignupPage = (props) => {
    return (
        <div className={styles.formContainer }>
            <div className={styles.formInfo}>
                <h2>CREATE AN ACCOUNT</h2>
                <h4>We always keep your name and email address private.</h4>
                <SignupForm {...props}/>
            </div>
        </div>
    );
}

export default SignupPage;
