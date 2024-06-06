type MakerItem = {
  mail: string;
  image: string;
};

type TagItem = {
  value: string;
  weight: number;
};

export type Music = {
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
  duration: number;
  maker: MakerItem;
};

export type Tag = {
  genres: TagItem[];
  moods: TagItem[];
  instruments: TagItem[];
  vocals: TagItem[];
  keys: TagItem[];
  genresList: string[];
  moodsList: string[];
  instrumentsList: string[];
  vocalsList: string[];
  keysList: string[];
};

export type AISearchResponse = {
  musicList: Music[];
  tags: Tag;
};
