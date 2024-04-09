interface Music {
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
}

export interface MusicList {
  musicList: Music[];
}
