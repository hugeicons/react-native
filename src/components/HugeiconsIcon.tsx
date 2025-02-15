import React from 'react';
import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';
import createHugeiconSingleton, { IconSvgElement } from '../create-hugeicon-singleton';

export type { IconSvgElement };

export interface HugeiconsProps extends Omit<SvgProps, 'color'> {
  icon: IconSvgElement;
  size?: string | number;
  strokeWidth?: number;
  altIcon?: IconSvgElement;
  showAlt?: boolean;
  color?: ColorValue;
}

export const HugeiconsIcon = React.memo(({ icon, ...props }: HugeiconsProps) => {
  // Create a singleton component for this specific icon
  const IconComponent = React.useMemo(
    () => createHugeiconSingleton('dynamic-icon', icon),
    [icon]
  );

  return <IconComponent {...props} />;
});

HugeiconsIcon.displayName = 'HugeiconsIcon';

export default HugeiconsIcon; 