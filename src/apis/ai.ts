import instance from '@/apis';
import { AnalysisRequest, AnalysisResponse } from '@/types/Music';

export const postAnalysis = async (request: AnalysisRequest) => {
  const { data } = await instance.post<AnalysisResponse>(
    `/ai/v1/analysis`,
    { script: request.script },
    { headers: { Authorization: `Bearer ${request.secret}` } },
  );

  return data;
};
