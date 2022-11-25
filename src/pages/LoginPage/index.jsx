import React from 'react';
import LoginForm from '../../components/FormController/LoginForm';
import styles from '../index.module.scss';

const LoginPage = (props) => {
  
  return (
      <div className={styles.formContainer }>
        <div className={styles.formInfo}>
          <h2>LOGIN TO YOUR ACCOUNT</h2>  
          <LoginForm {...props}/>
        </div>
      </div>
  );
}

export default LoginPage;
