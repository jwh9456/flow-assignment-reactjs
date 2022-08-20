import React from "react";
import styles from "../App.module.css"

const PinnedExtension = (props) => {


    return (
        props.isChecked ?
            <div className={styles.PinnedExtension}>
                <input type="checkbox" checked />{props.extname}
            </div> 
            :
            <div className={styles.PinnedExtension}>
                <input type="checkbox" />{props.extname}
            </div>
    )
};

export default PinnedExtension;