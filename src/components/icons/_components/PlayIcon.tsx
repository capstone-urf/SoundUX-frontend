import React, { memo } from 'react';

import Icon from '../icon';
import { IconProps } from '../types';

const StarIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="11"
      height="14"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.56334 13.4341C0.899527 13.8867 0 13.4113 0 12.6079L0 1.39214C0 0.588718 0.899529 0.113315 1.56334 0.565911L9.7882 6.17377C10.3704 6.57074 10.3704 7.42926 9.7882 7.82623L1.56334 13.4341Z"
        fill={props.fill || 'white'}
      />
    </svg>
  </Icon>
));

StarIcon.displayName = 'StarIcon';

export default StarIcon;
