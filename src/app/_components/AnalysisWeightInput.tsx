import { Text, Button, HStack, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';

interface AnalysisWeightInputProps {
  handleClick: (
    genre: number,
    instrument: number,
    key: number,
    mood: number,
    vocal: number,
  ) => void;
}

const AnalysisWeightInput = ({ handleClick }: AnalysisWeightInputProps) => {
  const [genresWeight, setGenresWeight] = useState<string>('0');
  const [instrumentsWeight, setInstrumentsWeight] = useState<string>('0');
  const [keysWeight, setKeysWeight] = useState<string>('0');
  const [moodsWeight, setMoodsWeight] = useState<string>('0');
  const [vocalsWeight, setVocalsWeight] = useState<string>('0');

  const totalWeight: number =
    parseFloat(genresWeight) +
    parseFloat(instrumentsWeight) +
    parseFloat(keysWeight) +
    parseFloat(moodsWeight) +
    parseFloat(vocalsWeight);

  return (
    <>
      <Text fontWeight="bold" mt={8} mb={3}>
        Weights (Total should be 1): {totalWeight.toFixed(2)}
      </Text>
      <HStack spacing={4} mb={3}>
        <VStack>
          <Text>genresWeight</Text>
          <Input
            value={genresWeight}
            onChange={e => setGenresWeight(e.target.value)}
          />
        </VStack>
        <VStack>
          <Text>instrumentsWeight</Text>
          <Input
            value={instrumentsWeight}
            onChange={e => setInstrumentsWeight(e.target.value)}
          />
        </VStack>
        <VStack>
          <Text>keysWeight</Text>
          <Input
            value={keysWeight}
            onChange={e => setKeysWeight(e.target.value)}
          />
        </VStack>{' '}
        <VStack>
          <Text>moodsWeight</Text>
          <Input
            value={moodsWeight}
            onChange={e => setMoodsWeight(e.target.value)}
          />
        </VStack>
        <VStack>
          <Text>vocalsWeight</Text>
          <Input value={vocalsWeight} onChange={() => setVocalsWeight('0')} />
        </VStack>
      </HStack>
      <Button
        onClick={() =>
          handleClick(
            parseFloat(genresWeight),
            parseFloat(instrumentsWeight),
            parseFloat(keysWeight),
            parseFloat(moodsWeight),
            parseFloat(vocalsWeight),
          )
        }
      >
        다 입력하고 클릭
      </Button>
    </>
  );
};

export default AnalysisWeightInput;
