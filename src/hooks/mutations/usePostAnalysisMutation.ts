import { useMutation } from '@tanstack/react-query';

import { postAnalysis } from '@/apis/ai';

const MUSIC_ANALYSIS_KEY = 'music-analysis';

export default function usePostAnalysisMutation() {
  return useMutation({
    mutationKey: [MUSIC_ANALYSIS_KEY],
    mutationFn: postAnalysis,
  });
}
