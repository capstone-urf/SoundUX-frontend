export type AnalysisRequest = {
  script: string;
  secret: string;
};

type AnalysisItemType = {
  value: string;
  weight: number;
};

export type AnalysisSearchRequest = {
  secret: string;
  tagSearch: boolean;
  tags: {
    genres: AnalysisItemType[];
    moods: AnalysisItemType[];
    instruments: AnalysisItemType[];
    vocals: AnalysisItemType[];
    keys: AnalysisItemType[];
  };
  weight: {
    genres: number;
    moods: number;
    instruments: number;
    keys: number;
  };
};

export type AnalysisResponse = {
  result: {
    genres: AnalysisItemType[];
    moods: AnalysisItemType[];
    instruments: AnalysisItemType[];
    vocals: AnalysisItemType[];
    keys: AnalysisItemType[];
  };
};

type Music = {
  id: string;
  title: string;
  category: string[];
  artist: string;
  price: string;
  genres: string[];
  vocals: string;
  moods: string[];
  instruments: string[];
  key: string;
  bpm: string;
  duration: string;
};

export type MusicList = {
  musicList: Music[];
};
