import React from 'react';
import styles from './App.module.css'
import CustomExtension from './component/CustomExtension';
import FixedExtension from './component/FixedExtension';


function App() {
  return (
    <div className="App">
      <header className="App_header">
        <div className="wrapper">
          <div className="banner">◎파일 확장자 차단</div>
          <div className="description">파일 확장자에 따라 특정 형식의 파일을 첨부하거나 전송하지 못하도록 제한</div>
          <div className={styles.ext_pinned}>
            <div className="ext_pinned_header">고정 확장자</div>
            <div className="ext_pinned_elem"></div>
          </div>
          <div className={styles.ext_custom}>
            <div className="ext_custom_header">커스텀 확장자</div>
            <div className="ext_custom_input_wrapper">
              <div className="ext_custom_input_textarea">
                <textarea placeholder="확장자 입력"></textarea>
                <button>+추가</button>
              </div>
              <div className="ext_custom_input_elem_window">
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