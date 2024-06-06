export const formatMusicDuration = (duration: number): string => {
  const minutes: number = Math.floor(duration / 60);
  const seconds: number = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const fetchAudioData = async (
  audioUrl: string,
  numberOfBars: number,
): Promise<number[]> => {
  if (numberOfBars === 0) return [];

  const response: Response = await fetch(audioUrl);
  const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
  const audioContext: AudioContext = new (window.AudioContext ||
    window.webkitAudioContext)();
  const audioBuffer: AudioBuffer =
    await audioContext.decodeAudioData(arrayBuffer);
  const data: Float32Array = audioBuffer.getChannelData(0);

  return analyzeAudioData(data, numberOfBars);
};

export const analyzeAudioData = (
  data: Float32Array,
  numberOfBars: number,
): number[] => {
  const step: number = Math.floor(data.length / numberOfBars);
  const bars: number[] = Array.from({ length: numberOfBars }, (_, i) => {
    const segment: Float32Array = data.slice(i * step, (i + 1) * step);
    const max: number = segment.reduce(
      (acc, val) => Math.max(acc, val),
      -Infinity,
    );
    const min: number = segment.reduce(
      (acc, val) => Math.min(acc, val),
      Infinity,
    );
    const amplitude: number = max - min;
    return amplitude === 0 ? 0.05 : amplitude;
  });

  const maxBarHeight: number = Math.max(...bars);

  return bars.map((bar: number): number => {
    const normalizedBar: number = bar / maxBarHeight;
    const logBar: number = Math.log1p(normalizedBar);
    const scaledBar: number = Math.pow(logBar, 2);
    return Math.max(scaledBar / Math.pow(Math.log1p(1), 2), 0.05);
  });
};
