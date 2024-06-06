'use client';

import * as styles from '@/app/search/page.css';
import Input from '@/components/commons/Input';
import { placeholders } from '@/constants';
import { Music, Tag } from '@/types/music';

interface SearchPageProps {
  musicList: Music[];
  tags: Tag;
}

const SearchPage = ({ musicList, tags }: SearchPageProps) => {
  console.log(musicList, tags);

  return (
    <div className={styles.searchPageGrid}>
      <div className={styles.searchLeftTab}></div>
      <div className={styles.searchRightTab}>
        <Input
          id="search"
          inputPadding={18}
          iconMargin={48}
          placeholders={placeholders}
        />
      </div>
    </div>
  );
};

export default SearchPage;
