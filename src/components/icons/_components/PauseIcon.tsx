import React, { memo } from 'react';

import Icon from '../icon';
import { IconProps } from '../types';

const StarIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 14C8.94771 14 8.5 13.5523 8.5 13V1C8.5 0.447716 8.94771 0 9.5 0H11.5C12.0523 0 12.5 0.447715 12.5 1V13C12.5 13.5523 12.0523 14 11.5 14H9.5ZM1.5 14C0.947715 14 0.5 13.5523 0.5 13V1C0.5 0.447716 0.947715 0 1.5 0H3.5C4.05228 0 4.5 0.447715 4.5 1V13C4.5 13.5523 4.05228 14 3.5 14H1.5Z"
        fill={props.fill || 'white'}
      />
    </svg>
  </Icon>
));

StarIcon.displayName = 'StarIcon';

export default StarIcon;
