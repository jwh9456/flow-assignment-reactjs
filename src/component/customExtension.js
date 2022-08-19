import React from "react";
import styles from "../App.module.css"

const CustomExtension = (props) => {

    return(
    <div className={styles.customExtensionElem}>
        {props.extname}&nbsp;<button className={styles.xbtt}>&#215;</button>
    </div>
    )
};

export default CustomExtension;