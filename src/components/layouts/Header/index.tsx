import { clsx } from 'clsx';
import { Barlow_Condensed } from 'next/font/google';
import Link from 'next/link';
import { ReactElement } from 'react';

import * as styles from './Header.css';
import { navigationContainer } from './Header.css';

const barlowCondensed = Barlow_Condensed({
  display: 'swap',
  weight: '500',
  subsets: ['latin'],
  preload: true,
});

const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={clsx(styles.branding, barlowCondensed.className)}
      >
        SoundUX
      </Link>
      <div className={styles.navigationContainer}>
        <a
          className={styles.navigation}
          href="https://www.musicplug.co.kr"
          target="blank"
        >
          뮤직플러그
        </a>
        <a
          className={styles.navigation}
          href="http://soundux.co.kr/"
          target="blank"
        >
          사운드유엑스
        </a>
      </div>
    </header>
  );
};

export default Header;
