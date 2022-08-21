import React, { useEffect } from 'react';
import styles from './App.module.css'
import CustomExtension from './component/CustomExtension';
import PinnedExtension from './component/PinnedExtension';
import { useRecoilState } from 'recoil';
import { CustomExtensionList, PinnedExtensionList } from './atoms';
import _ from 'lodash';
import { getData } from './apiService';
import { addData } from './apiService';

const validateExtInput = (e) => {
  if (e.target.value.length > 20) {
    alert("확장자 길이는 20자를 넘을 수 없습니다.")
    e.target.value = ""
  }
}

function App() {

  const [pinExt, setpinExt] = useRecoilState(PinnedExtensionList)
  const [customExt, setcustomExt] = useRecoilState(CustomExtensionList)

  useEffect(() => {
    (async () => {
      const temp = await getData("");
      console.log(temp)
      setpinExt(_.filter(temp, { ExtType: "pin" }))
      setcustomExt(_.filter(temp, { ExtType: "custom" }))
    })()
  }, []);

  const addCustomExt = (param) => {
    var regex = /[^a-zA-Z]/g
    if (regex.test(param)) {
      alert("확장자명은 영문으로 입력해주세요.")
    }
    else if (customExt.length >= 200) {
      alert("커스텀 확장자는 200개를 초과할 수 없습니다.")
    }
    else if (_.find(pinExt, { ExtName: param })) {
      alert("중복된 항목 추가 불가")
    }
    else if (_.find(customExt, { ExtName: param })) {
      alert("중복된 항목 추가 불가")
    }
    else {
      setcustomExt(customExt => [
        ...customExt,
        { id: null, ExtName: param, ExtType: 'custom' }
      ])
      addData(param)
    }
  }

  return (
    <div className={styles.App}>
      <header className="App_header">
        <div className="wrapper">
          <div className={styles.banner}>◎ 파일 확장자 차단</div>
          <div className="description">파일 확장자에 따라 특정 형식의 파일을 첨부하거나 전송하지 못하도록 제한</div>

          <div className={styles.ext_pinned}>
            <div className="ext_pinned_header">고정 확장자</div>
            <div className={styles.ext_pinned_elem}>
              {pinExt ? pinExt.map((elem) => (<PinnedExtension key={elem.id} dbid={elem.id} extname={elem.ExtName} isChecked={elem.isChecked} />)) : <div></div>}
            </div>
          </div>
          <div className={styles.ext_custom}>
            <div className="ext_custom_header">커스텀 확장자</div>
            <div className={styles.ext_custom_input_wrapper}>
              <div className="ext_custom_input_textarea">
                <input id="extinput" type='text' placeholder="확장자 입력" onChange={validateExtInput} />&nbsp;
                <button onClick={() => addCustomExt(document.getElementById('extinput').value)}>+추가</button>
              </div>

              <div className={styles.ext_custom_input_elem_window}>
                <div className="ext_custom_input_elem_count">{customExt.length}/200</div>
                <div className={styles.ext_custom_input_elems}>
                  {customExt ? customExt.map((elem) => (<CustomExtension key={elem.id} dbid={elem.id} extname={elem.ExtName} />)) : <div></div>}
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