import React from "react";
import { useSetRecoilState } from "recoil";
import styles from "../App.module.css"
import { CustomExtensionList } from "../atoms"
import { delData } from "../apiService";

const CustomExtension = (props) => {
    const setcustomExt = useSetRecoilState(CustomExtensionList)

    var onClickHandler = (param) => {
        setcustomExt(CustomExtensionList => CustomExtensionList.filter(customext => customext.ExtName !== param))
        delData(param)
    }

    return (
        <div className={styles.customExtensionElem}>
            {props.extname}&nbsp;<button onClick={() => onClickHandler(props.extname)} className={styles.xbtt}>&#215;</button>
        </div>
    )
};

export default CustomExtension;