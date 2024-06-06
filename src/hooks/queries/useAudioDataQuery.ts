import { useQuery } from '@tanstack/react-query';

import { QUERIES } from '@/constants';
import { fetchAudioData } from '@/utils/music-utils';

interface UseAudioDataProps {
  audioUrl: string;
  numberOfBars: number;
}

export const useAudioDataQuery = ({
  audioUrl,
  numberOfBars,
}: UseAudioDataProps) => {
  return useQuery({
    queryKey: [QUERIES.AUDIO.KEY, audioUrl, numberOfBars],
    queryFn: () => fetchAudioData(audioUrl, numberOfBars),
    enabled: !!audioUrl && numberOfBars > 0,
    staleTime: Infinity,
  });
};
