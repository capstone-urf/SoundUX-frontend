'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

import * as styles from '@/app/search/page.css';
import Audio from '@/components/Audio';
import Input from '@/components/commons/Input';
import PlayIcon from '@/components/icons/_components/PlayIcon';
import Layout from '@/components/layouts/Layout';
import { placeholders, searchData } from '@/constants';
import { rem } from '@/styles/pxto';
import { formatMusicDuration } from '@/utils/music-utils';

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // const { mutate: searchMutate, data } = useAISearchMutation(query);
  //
  // useEffect(() => {
  //   if (!query) window.location.href = '/';
  //   searchMutate();
  // }, [query, searchMutate]);

  const [searchQuery, setSearchQuery] = useState(query);
  const data = searchData;

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/search?q=${searchQuery}`;
  };

  return (
    <Layout>
      <div className={styles.searchPageGrid}>
        <div className={styles.searchLeftTab}></div>
        <div className={styles.searchRightTab}>
          <form style={{ width: '100%' }} onSubmit={handleSearch}>
            <Input
              id="search"
              inputPadding={18}
              iconMargin={48}
              placeholders={placeholders}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </form>
          {data && (
            <>
              <ul className={styles.tags.list}>
                {data.tags.moodsList.map(mood => (
                  <li key={mood} className={styles.tags.item}>
                    #{mood}
                  </li>
                ))}
                {data.tags.genresList.map(genre => (
                  <li key={genre} className={styles.tags.item}>
                    #{genre}
                  </li>
                ))}
              </ul>
              <ul className={styles.music.list}>
                {data.musicList.map(music => (
                  <li key={music.id} className={styles.music.item}>
                    <div className={styles.music.metadataContainer}>
                      <div className={styles.music.albumCover}>
                        <Image
                          src={music.maker.image}
                          alt={music.maker.mail}
                          sizes={rem(56)}
                          fill={true}
                        />
                      </div>
                      <span className={styles.music.albumTitleContainer}>
                        <p>{music.title}</p>
                        <p className={styles.music.albumArtist}>
                          {music.artist}
                        </p>
                      </span>
                    </div>
                    <div className={styles.music.albumControlContainer}>
                      <Audio
                        audioUrl={`/audio/${music.id}.mp3`}
                        width={rem(175)}
                        height={rem(37)}
                        showDuration={false}
                        showPlayPauseButton={false}
                      />
                      <p>{formatMusicDuration(music.duration)}</p>
                      <button className={styles.music.albumControlButton}>
                        <PlayIcon />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
