import * as React from 'react';

import { theme } from 'styled';
import { IconProps } from './Icons';

export const LogoutIcon = ({
  width,
  height,
  className,
  color = theme.colors.primary.main,
}: IconProps) => {
  const DEFAULT_WIDTH = '14';
  const DEFAULT_HEIGHT = '16';
  const DEFAULT_COLOR = '#f1f1f1';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || DEFAULT_WIDTH}
      height={height || DEFAULT_HEIGHT}
      viewBox="0 0 14 16"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.6704 7.99996C7.6704 8.39996 7.40423 8.66663 7.00498 8.66663C6.60573 8.66663 6.33957 8.39996 6.33957 7.99996V1.33329C6.33957 0.933293 6.60573 0.666626 7.00498 0.666626C7.40423 0.666626 7.6704 0.933293 7.6704 1.33329V7.99996ZM7.00477 15.3333C8.73485 15.3333 10.3984 14.6666 11.7292 13.4C14.3243 10.8 14.3243 6.53329 11.6627 3.93329C11.3965 3.66662 10.9973 3.66662 10.7311 3.93329C10.4649 4.19996 10.4649 4.59996 10.7311 4.86662C12.7939 6.93329 12.7939 10.3333 10.7311 12.4C8.66831 14.4666 5.27469 14.4666 3.2119 12.4C1.14912 10.3333 1.14912 6.93329 3.2119 4.86662C3.47807 4.59996 3.47807 4.19996 3.2119 3.93329C2.94574 3.66662 2.54649 3.66662 2.28032 3.93329C-0.314795 6.53329 -0.314795 10.8 2.28032 13.4C3.61115 14.6666 5.27469 15.3333 7.00477 15.3333Z"
        fill="black"
      />
    </svg>
  );
};
