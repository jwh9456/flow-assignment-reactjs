import { atom } from 'recoil';

export const PinnedExtensionList = atom({
  key: 'pinnedExtensionList',
  default: ""
});

export const CustomExtensionList = atom({
  key: 'customExtensionList',
  default: ""
});
