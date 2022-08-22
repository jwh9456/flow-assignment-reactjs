import React from "react";
import styles from "../App.module.css"
import { putData } from "../apiService";
import { PinnedExtensionList } from "../atoms";
import { useSetRecoilState } from "recoil";
import _ from 'lodash'

const PinnedExtension = (props) => {
    const setpinext = useSetRecoilState(PinnedExtensionList)

    const checkChange = ({ target }) => {
        console.log(props)
        if (props.isChecked === true) {
            // setpinext((pre) => {
            //     var statekey = _.find(pre, { id: props.extname })
            //     console.log(statekey)
            // })
            putData(props.extname, false)
        }
        else {
            // setpinext((pre) => {
            //     var statekey = _.find(pre, { id: props.extname })
            //     console.log(statekey)
            // })
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