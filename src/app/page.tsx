'use client';

import Image from 'next/image';
import { ReactElement, useState } from 'react';

import Input from '@/components/commons/Input';
import Layout from '@/components/layouts/Layout';

import * as styles from './page.css';

export default function Home(): ReactElement {
  const [search, setSearch] = useState<string>('');

  return (
    <Layout>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/image_main_bg.png"
          alt="Main Album Image"
          style={{ objectFit: 'cover' }}
          fill={true}
          priority={true}
        />
        <div className={styles.gradient} />
        <div className={styles.mainContainer}>
          <h2 className={styles.mainTitle}>
            오직 단 한 문장으로
            <br />
            당신의 작품을 더욱 풍성하게
          </h2>
          <Input value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>
    </Layout>
  );
}
