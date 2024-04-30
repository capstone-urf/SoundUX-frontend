import { useMutation } from '@tanstack/react-query';

import { postAnalysisSearch } from '@/apis/music';

const MUSIC_ANALYSIS_SEARCH_KEY = 'music-analysis-search';

export default function usePostAnalysisSearchMutation() {
  return useMutation({
    mutationKey: [MUSIC_ANALYSIS_SEARCH_KEY],
    mutationFn: postAnalysisSearch,
  });
}
