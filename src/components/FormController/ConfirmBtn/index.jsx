import React from 'react';
import styles from './index.module.scss';

const ConfirmBtn = (props) => {
    
    const {btnName} = props;
    
    return (
        <button className={styles.formButton}>{btnName}</button>
    );
}

export default ConfirmBtn;
