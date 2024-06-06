import instance from '@/apis/index';
import { AnalysisSearchRequest, MusicList } from '@/types/music';

export const postAnalysisSearch = async (request: AnalysisSearchRequest) => {
  const { data } = await instance.post<MusicList>(
    `/music/v1/search?tagSearch=${request.tagSearch}`,
    {
      tags: request.tags,
      weight: request.weight,
    },
  );

  return data;
};
