import React from "react";
import styles from "../App.module.css"
import { putData } from "../apiService";

const PinnedExtension = (props) => {

    const checkChange = ({ target }) => {
        console.log(props)
        if (props.isChecked === true) {
            putData(props.extname, false)
        }
        else {
            putData(props.extname, true)
        }
        
    }

    return (
        <div className={styles.PinnedExtension}>
            <input type="checkbox" checked={props.isChecked} onChange={(e) => checkChange(e)} />{props.extname}
        </div>
    )
};

export default PinnedExtension;