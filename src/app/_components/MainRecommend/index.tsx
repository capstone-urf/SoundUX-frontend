import { ReactElement } from 'react';

import { StarIcon } from '@/components/icons';

import * as styles from './MainRecommend.css';

const MainRecommend = (): ReactElement => {
  return (
    <div className={styles.recommendContainer}>
      <h3 className={styles.recommendTitle}>
        <StarIcon width={16} height={16} fill="#B2B2B2" />
        맞춤형 추천 결과
      </h3>
    </div>
  );
};

export default MainRecommend;
