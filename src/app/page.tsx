'use client';

import Image from 'next/image';
import { ReactElement, useState } from 'react';

import MainRecommend from '@/app/_components/MainRecommend';
import Input from '@/components/commons/Input';
import Layout from '@/components/layouts/Layout';

import * as styles from './page.css';

const placeholders: string[] = [
  '자동차를 타고 즐겁게 드라이브 하는 장면에 어울리는 음악',
  '예술 작품을 만드는 과정을 담은 영상에 어울리는 음악',
  '게임 하이라이트에 어울리는 음악',
  '여름철 해변에서 서핑이나 수상 스포츠를 즐기는 영상에 어울리는 음악',
  '도시의 야경을 배경으로 한 루프탑 파티의 분위기에 어울리는 음악',
];

export default function Home(): ReactElement {
  const [search, setSearch] = useState<string>('');

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
          <Input
            id="search"
            value={search}
            placeholders={placeholders}
            placeholderDuration={4000}
            onChange={e => setSearch(e.target.value)}
          />
          <MainRecommend />
        </div>
      </section>

      <section>
        <h2>
          다양한 형태의 창작물에
          <br />
          사용 되고 있습니다
        </h2>
      </section>
    </Layout>
  );
}
