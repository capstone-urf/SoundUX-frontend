import { HStack, Text } from '@chakra-ui/react';

import { AnalysisResponse } from '@/types/Music';

type AnalysisListProps = {
  analysis: AnalysisResponse;
};

const AnalysisList = ({ analysis }: AnalysisListProps) => {
  return (
    <HStack w="100%" mt={8} justifyContent="space-between">
      <div>
        <Text fontWeight="bold">Genres:</Text>
        {analysis.result.genres.map((item, index) => (
          <Text key={index}>{item.value}</Text>
        ))}
      </div>

      <div>
        <Text fontWeight="bold">Moods:</Text>
        {analysis.result.moods.map((item, index) => (
          <Text key={index}>{item.value}</Text>
        ))}
      </div>

      <div>
        <Text fontWeight="bold">Instruments:</Text>
        {analysis.result.instruments.map((item, index) => (
          <Text key={index}>{item.value}</Text>
        ))}
      </div>

      <div>
        <Text fontWeight="bold">Vocals:</Text>
        {analysis.result.vocals.map((item, index) => (
          <Text key={index}>{item.value}</Text>
        ))}
      </div>

      <div>
        <Text fontWeight="bold">Keys:</Text>
        {analysis.result.keys.map((item, index) => (
          <Text key={index}>{item.value}</Text>
        ))}
      </div>
    </HStack>
  );
};

export default AnalysisList;
