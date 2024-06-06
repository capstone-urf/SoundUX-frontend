import { clsx } from 'clsx';
import { Barlow_Condensed } from 'next/font/google';
import Link from 'next/link';
import { ReactElement } from 'react';

import * as styles from './Header.css';

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
    </header>
  );
};

export default Header;
