'use client';

import { useSearchParams } from 'next/navigation';
import { ReactElement, useState } from 'react';

import Input from '@/components/commons/Input';
import Layout from '@/components/layouts/Layout';
import { placeholders } from '@/constants';

import * as styles from './page.css';

export default function SearchPage(): ReactElement {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState<string>(query);

  return (
    <Layout>
      <div className={styles.searchPageGrid}>
        <div className={styles.searchLeftTab}></div>
        <div className={styles.searchRightTab}>
          <Input
            id="search"
            inputPadding={18}
            iconMargin={48}
            placeholders={placeholders}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </Layout>
  );
}
