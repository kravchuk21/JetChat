import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgType} from './types';

const GoBackSvgIcon: React.FC<SvgType> = ({size = 24, color = '#10c17d'}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 10 12" fill="none">
      <Path
        d="M9.166 5.167H2.841l2.75-2.742a.837.837 0 00-1.183-1.183L.241 5.408a.833.833 0 00-.175.275.833.833 0 000 .634c.04.102.1.195.175.275l4.167 4.166a.833.833 0 001.183 0 .832.832 0 000-1.183l-2.75-2.742h6.325a.833.833 0 000-1.666z"
        fill={color}
      />
    </Svg>
  );
};

export default GoBackSvgIcon;
