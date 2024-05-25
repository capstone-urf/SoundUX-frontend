'use client';

import Image from 'next/image';
import { FormEvent, ReactElement, useState } from 'react';

import Audio from '@/components/Audio';
import Input from '@/components/commons/Input';
import Layout from '@/components/layouts/Layout';
import { placeholders } from '@/constants';

import MainRecommend from './_components/MainRecommendList';
import * as styles from './page.css';

export default function Home(): ReactElement {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/search?q=${encodeURIComponent(search)}`;
  };

  return (
    <Layout>
      <section className={styles.entryContainer}>
        <Image
          className={styles.entryBackgroundImage}
          src="/assets/image_main_bg.png"
          alt="Main Album Image"
          fill={true}
          priority={true}
        />
        <div className={styles.entryGradient} />
        <div className={styles.mainContainer}>
          <h2 className={styles.mainTitle}>
            오직 단 한 문장으로
            <br />
            당신의 작품을 더욱 풍성하게
          </h2>
          <form className={styles.mainInputForm} onSubmit={handleSearch}>
            <Input
              id="search"
              value={search}
              placeholders={placeholders}
              placeholderDuration={4000}
              onChange={e => setSearch(e.target.value)}
            />
          </form>
          <MainRecommend />
        </div>
      </section>

      <section className={styles.showcaseContainer}>
        <h2 className={styles.showcaseTitle}>
          다양한 형태의 창작물에
          <br />
          사용 되고 있습니다
        </h2>
        <Audio
          audioUrl="http://localhost:3000/audio/1001741409.mp3"
          width="100%"
          height="18px"
        />
      </section>
    </Layout>
  );
}
