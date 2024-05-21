import { ReactNode } from 'react';

import * as styles from './Layout.css';
import Header from '../Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
