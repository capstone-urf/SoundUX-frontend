import { ReactElement, useEffect, useRef } from 'react';

import { useAudio } from '@/components/Audio/Audio.context';
import * as styles from '@/components/Audio/Audio.css';
import { useAudioDataQuery } from '@/hooks/queries/useAudioDataQuery';
import { rem } from '@/styles/pxto';

interface WaveformProps {
  audioUrl: string;
  width: string;
  height: string;
}

const Waveform = ({ audioUrl, width, height }: WaveformProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: bars = [], refetch } = useAudioDataQuery({
    audioUrl,
    containerRef,
  });

  const { isPlaying, currentTime, duration, playAudio, pauseAudio, loadAudio } =
    useAudio();

  useEffect(() => {
    if (containerRef.current) {
      refetch().then();
    }
    loadAudio(audioUrl);
  }, [audioUrl, width, loadAudio, refetch]);

  const handlePlayPause = () => {
    isPlaying ? pauseAudio() : playAudio(audioUrl);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <div>
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      <div
        ref={containerRef}
        className={styles.waveformContainer}
        style={{ width, height }}
      >
        {bars.map((barHeight, index) => {
          const barPosition = (index / bars.length) * duration;
          const isActive = currentTime >= barPosition;
          return (
            <div
              key={index}
              className={`${styles.waveformBar} ${isActive ? styles.waveformBarPrimary : styles.waveformBarBackground}`}
              style={{
                height: `${barHeight * 100}%`,
                width: rem(1),
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Waveform;
