import React from 'react';
import styles from './App.module.css'
import CustomExtension from './component/CustomExtension';
import PinnedExtension from './component/PinnedExtension';
import {atom} from 'recoil';
import axios from 'axios';

const pinnedExtensionList = atom({
  key: 'pinnedExtensionList',
  default: []
});

const customExtensionList = atom({
  key: 'customExtensionList',
  default: []
})

function App() {
  return (
    <div className={styles.App}>
      <header className="App_header">
        <div className="wrapper">
          <div className={styles.banner}>◎ 파일 확장자 차단</div>
          <div className="description">파일 확장자에 따라 특정 형식의 파일을 첨부하거나 전송하지 못하도록 제한</div>
          <div className={styles.ext_pinned}>
            <div className="ext_pinned_header">고정 확장자</div>
            <div className="ext_pinned_elem">
              <PinnedExtension extname="js"/>

            </div>
          </div>
          <div className={styles.ext_custom}>
            <div className="ext_custom_header">커스텀 확장자</div>
            <div className="ext_custom_input_wrapper">
              <div className="ext_custom_input_textarea">
                <input type='text' placeholder="확장자 입력"/>&nbsp;
                <button>+추가</button>
              </div>
              <div className={styles.ext_custom_input_elem_window}>
                <div className="ext_custom_input_elem_count">3/200</div>
                <div className="ext_custom_input_elems">
                  <CustomExtension extname="ts"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;