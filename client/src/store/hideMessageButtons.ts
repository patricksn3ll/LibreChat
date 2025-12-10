import { atom } from 'recoil';

export const hideMessageButtonsAtom = atom<boolean>({
  key: 'hideMessageButtons',
  default: false,
});
