import React from 'react';
import eyeOnIcon from '../../../img/eye_on_icon.png';
import eyeOffIcon from '../../../img/eye_off_icon.png';
import styles from './index.module.scss'
const ShowPassBtn = (props) => {
    
    const {onClick, status} = props;
    const icon = status ? eyeOffIcon : eyeOnIcon;
    
    return (
        <>
            <button className={styles.eyeBtn} type="button" onClick={onClick}>
                <img className={styles.eyeIcon} src={icon} alt="eye_off_icon"/>
            </button>
        </>
        
    );
}

export default ShowPassBtn;
