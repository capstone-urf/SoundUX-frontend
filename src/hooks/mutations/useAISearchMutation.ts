import { useMutation } from '@tanstack/react-query';

import { postAISearch } from '@/apis/ai';
import { QUERIES } from '@/constants';

export default function useAISearchMutation(script: string) {
  return useMutation({
    mutationKey: [QUERIES.AI.SEARCH_KEY, script],
    mutationFn: () => postAISearch(script),
  });
}
