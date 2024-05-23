import { ReactElement } from 'react';

import { AudioProvider } from './Audio.context';
import Waveform from './Waveform';

interface AudioProps {
  audioUrl: string;
  width: string;
  height: string;
  visible?: boolean;
  interactive?: boolean;
  showPlayPauseButton?: boolean;
  showDuration?: boolean;
}

const Audio = (props: AudioProps): ReactElement => {
  return (
    <AudioProvider>
      <Waveform {...props} />
    </AudioProvider>
  );
};

export default Audio;
