import React, { useEffect, useRef } from 'react';

interface WaveformProps {
  audioUrl: string;
}

const Waveform: React.FC<WaveformProps> = ({ audioUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(audioUrl);
      const arrayBuffer = await response.arrayBuffer();
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      const canvas = canvasRef.current;
      if (canvas) {
        const canvasContext = canvas.getContext('2d');
        if (canvasContext) {
          const width = canvas.width;
          const height = canvas.height;
          canvasContext.clearRect(0, 0, width, height);

          const data = audioBuffer.getChannelData(0); // 첫 번째 채널 데이터만 사용
          const barWidth = 1; // 막대 너비
          const barGap = 3; // 막대 간격
          const numberOfBars = Math.floor(width / (barWidth + barGap));
          const step = Math.floor(data.length / numberOfBars);
          const amp = height / 2;

          for (let i = 0; i < numberOfBars; i++) {
            let min = 1.0;
            let max = -1.0;
            for (let j = 0; j < step; j++) {
              const datum = data[i * step + j];
              if (datum < min) min = datum;
              if (datum > max) max = datum;
            }
            const barHeight = Math.max(1, (max - min) * amp);
            const x = i * (barWidth + barGap);
            const y = (height - barHeight) / 2;

            canvasContext.fillStyle = 'green';
            canvasContext.fillRect(x, y, barWidth, barHeight);
          }
        }
      }
    };

    fetchData();
  }, [audioUrl]);

  return <canvas ref={canvasRef} width={800} height={200} />;
};

export default Waveform;
