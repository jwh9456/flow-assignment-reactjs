import React from "react";
import styles from "../App.module.css"

const PinnedExtension = (props) => {

    return(
    <div className={styles.PinnedExtension}>
        <input type="checkbox"/>{props.extname}
    </div>
    )
};

export default PinnedExtension;