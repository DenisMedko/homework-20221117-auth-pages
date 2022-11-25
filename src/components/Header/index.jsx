import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.webp'
import styles from './header.module.scss';

const Header = (props) => {
    
    const {location : {pathname}, authUser} = props;
    
    return (
        <header className={styles.header}>
            <div >
                <Link to="/" className={styles.logo} >
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            {authUser && <div>Hello {authUser.displayName}!</div>}
            {pathname !== '/login' && 
                <div className={styles.loginButton}>
                    <Link to="/login">LOGIN</Link>
                </div>
            }
            {pathname === '/login' && 
                <div className={styles.loginButton}>
                    <Link to="/signup">SIGNUP</Link>
                </div>
            }   
        </header>
    );
}

export default Header;
