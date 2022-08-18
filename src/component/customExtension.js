import React from "react";
import styles from "../App.module.css"

const customExtension = (props) => {

    return(<div className={styles.customExtensionElem}>{props.extname}</div>)
};

export default customExtension