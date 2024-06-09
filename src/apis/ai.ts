import instance from '@/apis';
import { AISearchResponse } from '@/types/music';

export const postAISearch = async (script: string) => {
  const { data } = await instance.post<AISearchResponse>(`/v2/ai/music`, {
    script,
  });

  return data;
};
