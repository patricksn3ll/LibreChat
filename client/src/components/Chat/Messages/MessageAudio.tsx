import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import type { TMessageAudio } from '~/common';
import { BrowserTTS, ExternalTTS } from '~/components/Audio/TTS';
import { TTSEndpoints } from '~/common';
import store from '~/store';

function MessageAudio(props: TMessageAudio) {
  console.log('MessageAudio props:', props);
  console.log('MessageAudio content:', props.content);
  const engineTTS = useRecoilValue<string>(store.engineTTS);

  console.log('MessageAudio using TTS engine:', engineTTS);

  const TTSComponents = {
    [TTSEndpoints.browser]: BrowserTTS,
    [TTSEndpoints.external]: ExternalTTS,
  };

  const SelectedTTS = TTSComponents[engineTTS];
  if (!SelectedTTS) {
    return null;
  }
  return <SelectedTTS {...props} />;
}

export default memo(MessageAudio);
