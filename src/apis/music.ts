import instance from '@/apis/index';
import { AnalysisSearchRequest, MusicList } from '@/types/Music';

export const postAnalysisSearch = async (request: AnalysisSearchRequest) => {
  const { data } = await instance.post<MusicList>(
    `/music/v1/search?tagSearch=${request.tagSearch}`,
    {
      tags: request.tags,
      weight: request.weight,
    },
    { headers: { Authorization: `Bearer ${request.secret}` } },
  );

  return data;
};
