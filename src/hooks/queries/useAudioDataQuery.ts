import { useQuery } from '@tanstack/react-query';
import { RefObject } from 'react';

import { QUERIES } from '@/constants';

const fetchAudioData = async (audioUrl: string, numberOfBars: number) => {
  if (numberOfBars === 0) return [];
  const response = await fetch(audioUrl);
  const arrayBuffer = await response.arrayBuffer();
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  const data = audioBuffer.getChannelData(0);

  const step = Math.floor(data.length / numberOfBars);
  const bars = Array.from({ length: numberOfBars }, (_, i) => {
    const segment = data.slice(i * step, (i + 1) * step);
    const max = segment.reduce((acc, val) => Math.max(acc, val), -Infinity);
    const min = segment.reduce((acc, val) => Math.min(acc, val), Infinity);
    const amplitude = max - min;
    return amplitude === 0 ? 0.05 : amplitude;
  });

  const maxBarHeight = Math.max(...bars);
  const normalizedBars = bars.map(bar => bar / maxBarHeight);

  return normalizedBars.map(bar => Math.max(bar, 0.05));
};

const calculateNumberOfBars = (containerWidth: number, barGap: number) =>
  Math.floor(containerWidth / (1 + barGap));

interface UseAudioDataProps {
  audioUrl: string;
  containerRef: RefObject<HTMLDivElement>;
}

export const useAudioDataQuery = ({
  audioUrl,
  containerRef,
}: UseAudioDataProps) => {
  const barGap = 3;
  const numberOfBars = containerRef.current
    ? calculateNumberOfBars(containerRef.current.clientWidth, barGap)
    : 0;

  return useQuery({
    queryKey: [QUERIES.AUDIO.KEY, audioUrl, numberOfBars],
    queryFn: () => fetchAudioData(audioUrl, numberOfBars),
    enabled: !!audioUrl && numberOfBars > 0,
    staleTime: Infinity,
  });
};
