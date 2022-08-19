import {atom} from 'recoil';

const pinnedExtensionList = atom({
    key: 'pinnedExtensionList',
    default: []
  });
  
  const customExtensionList = atom({
    key: 'customExtensionList',
    default: []
  })