import Link from 'next/link';
import { ReactElement } from 'react';

import * as styles from './Header.css';

const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        SoundUX
      </Link>
    </header>
  );
};

export default Header;
