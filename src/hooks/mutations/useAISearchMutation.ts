import { useMutation } from '@tanstack/react-query';

import { postAISearch } from '@/apis/ai';
import getQueryClient from '@/app/getQueryClient';
import { QUERIES } from '@/constants';

export default function useAISearchMutation(script: string) {
  return useMutation({
    mutationKey: [QUERIES.AI.SEARCH_KEY, script],
    mutationFn: () => postAISearch(script),
  });
}

export async function useAISearchFetch(script: string) {
  const queryClient = getQueryClient();

  console.log('script', script);

  return await queryClient.fetchQuery({
    queryKey: [QUERIES.AI.SEARCH_KEY, script],
    queryFn: () => postAISearch(script),
  });
}
