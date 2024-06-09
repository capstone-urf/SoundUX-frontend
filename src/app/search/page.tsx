'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';

import * as styles from '@/app/search/page.css';
import Audio from '@/components/Audio';
import Checkbox from '@/components/commons/Checkbox';
import Input from '@/components/commons/Input';
import Spinner from '@/components/commons/Spinner';
import PlayIcon from '@/components/icons/_components/PlayIcon';
import Layout from '@/components/layouts/Layout';
import { placeholders } from '@/constants';
import useAISearchMutation from '@/hooks/mutations/useAISearchMutation';
import { rem } from '@/styles/pxto';
import { formatMusicDuration } from '@/utils/music-utils';

type PageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default function Page({ searchParams }: PageProps) {
  const query: string = searchParams.q || '';

  const { mutate: searchMutate, data } = useAISearchMutation(query);

  useEffect(() => {
    if (!query) window.location.href = '/';
    searchMutate();
  }, [query, searchMutate]);

  const [searchQuery, setSearchQuery] = useState(query);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/search?q=${searchQuery}`;
  };

  if (data === undefined) return <Spinner />;

  return (
    <Layout>
      <div className={styles.searchPageGrid}>
        <div className={styles.searchLeftTab}>
          <h3 className={styles.filter.sectionTitle}>정렬 방법</h3>
          <Checkbox label="추천 순" checked={true} />

          <h3 className={styles.filter.sectionTitle}>장르</h3>
          <div className={styles.filter.section}>
            {data.tags.genresList.map(genre => (
              <Checkbox key={genre} label={genre} checked={true} />
            ))}
          </div>

          <h3 className={styles.filter.sectionTitle}>악기</h3>
          <div className={styles.filter.section}>
            {data.tags.instrumentsList.map(instrument => (
              <Checkbox key={instrument} label={instrument} checked={true} />
            ))}
          </div>
        </div>
        <div />
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
                {data.tags.instrumentsList.map(mood => (
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
