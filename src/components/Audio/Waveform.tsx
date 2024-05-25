import { clsx } from 'clsx';
import React, {
  ReactElement,
  useEffect,
  useRef,
  useCallback,
  MouseEvent,
  KeyboardEvent,
} from 'react';

import { useAudio } from '@/components/Audio/Audio.context';
import * as styles from '@/components/Audio/Audio.css';
import { useAudioDataQuery } from '@/hooks/queries/useAudioDataQuery';
import { rem } from '@/styles/pxto';

interface WaveformProps {
  audioUrl: string;
  width: string;
  height: string;
  visible?: boolean;
  interactive?: boolean;
  showPlayPauseButton?: boolean;
  showDuration?: boolean;
}

const Waveform = ({
  audioUrl,
  width,
  height,
  visible = true,
  interactive = true,
  showPlayPauseButton = true,
  showDuration = true,
}: WaveformProps): ReactElement | null => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const { data: bars = [], refetch } = useAudioDataQuery({
    audioUrl,
    containerRef,
  });

  const {
    isPlaying,
    currentTime,
    duration,
    playAudio,
    pauseAudio,
    loadAudio,
    setCurrentTime,
    audioRef,
  } = useAudio();

  useEffect(() => {
    if (containerRef.current) {
      refetch().then();
    }
    loadAudio(audioUrl);
  }, [audioUrl, width, loadAudio, refetch]);

  const handlePlayPause = useCallback(() => {
    isPlaying ? pauseAudio() : playAudio(audioUrl);
  }, [isPlaying, playAudio, pauseAudio, audioUrl]);

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, []);

  const updateCurrentTime = useCallback(
    (clientX: number) => {
      if (containerRef.current && audioRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const newTime = (offsetX / rect.width) * duration;
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
      }
    },
    [duration, setCurrentTime, audioRef],
  );

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      if (interactive) {
        isDraggingRef.current = true;
        updateCurrentTime(e.clientX);
      }
    },
    [updateCurrentTime, interactive],
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (interactive && isDraggingRef.current) {
        updateCurrentTime(e.clientX);
      }
    },
    [updateCurrentTime, interactive],
  );

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (interactive) {
        if (e.key === 'ArrowRight') {
          setCurrentTime(Math.min(currentTime + 5, duration));
          if (audioRef.current)
            audioRef.current.currentTime = Math.min(currentTime + 5, duration);
        } else if (e.key === 'ArrowLeft') {
          setCurrentTime(Math.max(currentTime - 5, 0));
          if (audioRef.current)
            audioRef.current.currentTime = Math.max(currentTime - 5, 0);
        } else if (e.key === ' ') {
          e.preventDefault();
          handlePlayPause();
        }
      }
    },
    [
      currentTime,
      duration,
      setCurrentTime,
      handlePlayPause,
      audioRef,
      interactive,
    ],
  );

  return (
    <>
      {showPlayPauseButton && (
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      )}
      {showDuration && (
        <div>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      )}
      {visible && (
        <div
          ref={containerRef}
          className={styles.waveformContainer}
          style={{ width, height, cursor: interactive ? 'pointer' : 'default' }}
          role="slider"
          tabIndex={0}
          aria-valuenow={currentTime}
          aria-valuemin={0}
          aria-valuemax={duration}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onKeyDown={handleKeyDown}
        >
          {bars.map((barHeight, index) => {
            const barPosition = (index / bars.length) * duration;
            const isActive = currentTime > barPosition;
            return (
              <span
                key={index}
                className={clsx(styles.waveformBar, {
                  [styles.waveformBarActive]: isActive,
                })}
                style={{
                  height: `${Math.min(barHeight, 1) * 100}%`,
                  width: rem(1),
                }}
              ></span>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Waveform;
