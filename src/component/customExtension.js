import React from "react";
import styles from "../App.module.css"

const CustomExtension = (props) => {

    return(
    <div className={styles.customExtensionElem}>
        {props.extname}
        <button>\00d7</button>
    </div>
    )
};

export default CustomExtension;