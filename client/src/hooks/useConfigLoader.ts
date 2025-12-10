import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { hideMessageButtonsAtom } from '~/store/hideMessageButtons';

export function useConfigLoader() {
  const setHideMessageButtons = useSetRecoilState(hideMessageButtonsAtom);

  useEffect(() => {
    fetch('/api/config')
      .then((res) => res.json())
      .then((config) => {
        setHideMessageButtons(!!config.hideMessageButtons);
      });
  }, [setHideMessageButtons]);
}
