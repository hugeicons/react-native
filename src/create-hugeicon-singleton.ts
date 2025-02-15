import { createElement, forwardRef, ForwardRefExoticComponent } from 'react';
import {Circle, G, Line, Path, Rect, Svg, SvgProps} from 'react-native-svg';

const defaultAttributes = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
};

export type IconSvgElement = readonly (readonly [string, { readonly [key: string]: string | number }])[];

export interface HugeiconsProps extends SvgProps {
  size?: string | number;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
  altIcon?: IconSvgElement;
  showAlt?: boolean;
}

export type HugeiconsIcon = ForwardRefExoticComponent<HugeiconsProps>;

const SVGComponents: { [key: string]: any } = {
  svg: Svg,
  path: Path,
  circle: Circle,
  rect: Rect,
  line: Line,
  g: G,
};

const createHugeiconSingleton = (
  iconName: string,
  svgElements: IconSvgElement,
): React.FC<HugeiconsProps> => {
  return forwardRef<any, HugeiconsProps>(
    (
      {
        color = '#000',
        size = 24,
        strokeWidth,
        absoluteStrokeWidth = false,
        altIcon,
        showAlt = false,
        ...rest
      },
      ref,
    ) => {
      const calculatedStrokeWidth = strokeWidth !== undefined
        ? (absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth)
        : undefined;

      const elementProps = {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        color,
        ...(calculatedStrokeWidth !== undefined && {
          strokeWidth: calculatedStrokeWidth,
          stroke: 'currentColor'
        }),
        ...rest,
      };

      const currentIcon = showAlt && altIcon ? altIcon : svgElements;

      const svgChildren = currentIcon.map(([tag, attrs], index) => {
        const SvgComponent = SVGComponents[tag.toLowerCase()];
        if (!SvgComponent) return null;

        return createElement(SvgComponent, {
          ...attrs,
          key: `${tag}-${index}`,
        });
      });

      return createElement(
        Svg,
        elementProps,
        svgChildren
      );
    }
  );
};

export default createHugeiconSingleton; 