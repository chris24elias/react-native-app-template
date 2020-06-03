import * as React from 'react';
import Animated from 'react-native-reanimated';
import Svg, {Path, PathProps, Circle, CircleProps} from 'react-native-svg';
import {SVGProps} from '.';

const AnimatedPath = (Animated.createAnimatedComponent(
  Path,
) as any) as React.ComponentClass<
  Animated.AnimateProps<{}, PathProps & {style?: any}>
>;

const AnimatedCircle = (Animated.createAnimatedComponent(
  Circle,
) as any) as React.ComponentClass<
  Animated.AnimateProps<{}, CircleProps & {style?: any}>
>;

Animated.addWhitelistedNativeProps({
  stroke: true,
});

const PeopleSVG = ({color, size}: SVGProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <AnimatedPath
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <AnimatedCircle
        cx={9}
        cy={7}
        r={4}
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
      <AnimatedPath
        d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PeopleSVG;

// import * as React from "react";
// import Svg, { Path, Circle } from "react-native-svg";

// function SvgUsers(props) {
//   return (
//     <Svg
//       width={24}
//       height={24}
//       fill="none"
//       stroke="currentColor"
//       strokeWidth={2}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="users_svg__feather users_svg__feather-users"
//       {...props}
//     >
//       <Path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
//       <Circle cx={9} cy={7} r={4} />
//       <Path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
//     </Svg>
//   );
// }

// export default SvgUsers;
