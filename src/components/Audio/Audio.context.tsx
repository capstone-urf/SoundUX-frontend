import {
  createContext,
  useState,
  useContext,
  useRef,
  ReactNode,
  useEffect,
  useCallback,
  MutableRefObject,
} from 'react';

interface AudioContextProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playAudio: (audioUrl: string) => void;
  pauseAudio: () => void;
  loadAudio: (audioUrl: string) => void;
  setCurrentTime: (time: number) => void;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTimeState] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;

    const handleTimeUpdate = () => setCurrentTimeState(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTimeState(0);
    };
    const handleError = (e: Event) => console.error('Audio error:', e);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const loadAudio = useCallback((audioUrl: string) => {
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.load();
    }
  }, []);

  const playAudio = useCallback(
    (audioUrl: string) => {
      if (audioRef.current) {
        if (audioRef.current.src !== audioUrl) {
          loadAudio(audioUrl);
        }
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(console.error);
      }
    },
    [loadAudio],
  );

  const pauseAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const setCurrentTime = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTimeState(time);
    }
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        playAudio,
        pauseAudio,
        loadAudio,
        setCurrentTime,
        audioRef,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextProps => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
