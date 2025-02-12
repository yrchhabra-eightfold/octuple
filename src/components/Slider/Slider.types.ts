import React from 'react';
import { OcBaseProps } from '../OcBase';
import { ConfigContextProps, Size } from '../ConfigProvider';
import { TooltipProps } from '../Tooltip';

import styles from './slider.module.scss';

// The subtracted integer accounts for rounding in the browser.
// Other than this, there are no magic numbers.
const LARGE_INLINE_MARGIN: number = +styles.largeSliderInlineMargin;
export const LARGE_INLINE_MARGIN_OFFSET: number = LARGE_INLINE_MARGIN * 2 - 4;

const MEDIUM_INLINE_MARGIN: number = +styles.mediumSliderInlineMargin;
export const MEDIUM_INLINE_MARGIN_OFFSET: number = MEDIUM_INLINE_MARGIN * 2 - 2;

const SMALL_INLINE_MARGIN: number = +styles.smallSliderInlineMargin;
export const SMALL_INLINE_MARGIN_OFFSET: number = SMALL_INLINE_MARGIN * 2 - 2;

export const LARGE_THUMB_DIAMETER: number = +styles.largeThumbDiameter;
export const LARGE_THUMB_RADIUS: number = LARGE_THUMB_DIAMETER / 2;

export const MEDIUM_THUMB_DIAMETER: number = +styles.mediumThumbDiameter;
export const MEDIUM_THUMB_RADIUS: number = MEDIUM_THUMB_DIAMETER / 2;

export const SMALL_THUMB_DIAMETER: number = +styles.smallThumbDiameter;
export const SMALL_THUMB_RADIUS: number = SMALL_THUMB_DIAMETER / 2;

export const THUMB_TOOLTIP_Y_OFFSET: number = 8;

export type SliderLabelPosition = 'bottom' | 'inline';

export type SliderMarks = SliderProps['marks'];

export type SliderType = 'data' | 'default';

export enum SliderSize {
  Flex = 'flex',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}
export interface Marker {
  /**
   * Custom Marker label.
   */
  label?: React.ReactNode;
  /**
   * Custom Marker style.
   */
  style?: React.CSSProperties;
}

export interface SliderMarker extends Marker {
  /**
   * The step value of the marker.
   */
  value: number;
}

export interface MarkProps {
  /**
   * The Mark renderer.
   */
  children?: React.ReactNode;
  /**
   * Callback executed on Mark click.
   */
  onClick: (value: number) => void;
  /**
   * Custom Mark style.
   */
  style?: React.CSSProperties;
  /**
   * The Mark value
   */
  value: number;
}

export interface MarksProps {
  /**
   * The Slider marks.
   */
  marks?: SliderMarker[];
  /**
   * Callback executed on Mark click.
   */
  onClick: (value: number) => void;
}

export interface DotProps {
  /**
   * Custom active dot style.
   */
  activeStyle?:
    | React.CSSProperties
    | ((dotValue: number) => React.CSSProperties);
  /**
   * Custom dot style.
   */
  style?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
  /**
   * The step dot value.
   */
  value: number;
}

export interface StepsProps {
  /**
   * Custom active dot style.
   */
  activeStyle?:
    | React.CSSProperties
    | ((dotValue: number) => React.CSSProperties);
  /**
   * The step dots.
   */
  dots?: boolean;
  /**
   * The Slider marks.
   */
  marks: SliderMarker[];
  /**
   * Custom dot style.
   */
  style?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
}

export interface SliderProps extends SliderInputProps {
  /**
   * Indicates if the value should be displayed under the Slider.
   * @default true
   */
  showLabels?: boolean;
  /**
   * Indicates if steps/markers should be displayed on the Slider track.
   * @default false
   */
  showMarkers?: boolean;
}

export interface SliderInputProps
  extends Omit<OcBaseProps<HTMLInputElement>, 'onChange' | 'type' | 'value'> {
  /**
   * Custom active dot style.
   */
  activeDotStyle?:
    | React.CSSProperties
    | ((dotValue: number) => React.CSSProperties);
  /**
   * Allows focus on the Slider when it's disabled.
   * @default false
   */
  allowDisabledFocus?: boolean;
  /**
   * The Slider aria label text.
   */
  ariaLabel?: string;
  /**
   * The Slider autoFocus attribute.
   * @default false
   */
  autoFocus?: boolean;
  /**
   * Configure how contextual props are consumed.
   */
  configContextProps?: ConfigContextProps;
  /**
   * Custom class names of the component container.
   */
  containerClassNames?: string;
  /**
   * The Slider disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * Enable Slider step dots.
   * @default false
   */
  dots?: boolean;
  /**
   * Custom dot style.
   */
  dotStyle?: React.CSSProperties | ((dotValue: number) => React.CSSProperties);
  /**
   * The Slider is a form item.
   * @default false
   */
  formItemInput?: boolean;
  /**
   * Hide the maximum value of the Slider.
   * @default false
   */
  hideMax?: boolean;
  /**
   * Hide the minimum value of the Slider.
   * @default false
   */
  hideMin?: boolean;
  /**
   * Whether to hide the Slider thumb until rail is clicked.
   * @default false
   */
  hideThumb?: boolean;
  /**
   * Hide the value of the Slider.
   * @default false
   */
  hideValue?: boolean;
  /**
   * The input id.
   * NOTE: For range Sliders, each input's id will have an index value added.
   */
  id?: string;
  /**
   * Make effect when `marks` isn't null,
   * true means containment and false means coordinative.
   * @default true
   */
  included?: boolean;
  /**
   * Sets the Slider extremity label position.
   * @default 'bottom'
   */
  labelPosition?: SliderLabelPosition;
  /**
   * Slider custom marks, type of key must be number,
   * and must in closed interval [min, max], each mark may declare its own style.
   */
  marks?: Record<string | number, React.ReactNode | Marker>;
  /**
   * The maximum value of the Slider.
   * @default 100
   */
  max?: number;
  /**
   * The custom maximum value label of the Slider.
   */
  maxLabel?: string;
  /**
   * The minimum value of the Slider.
   * @default 0
   */
  min?: number;
  /**
   * The custom minimum value label of the Slider.
   */
  minLabel?: string;
  /**
   * The input name.
   * NOTE: For range Sliders, each input's name will have an index value added.
   */
  name?: string;
  /**
   * The input onChange event handler.
   */
  onChange?: (value: number | number[]) => void;
  /**
   * The Slider is read only.
   */
  readOnly?: boolean;
  /**
   * The Slider size.
   * @default SliderSize.Medium
   */
  size?: SliderSize | Size;
  /**
   * Selected values must be a multiple of step.
   * @default 1
   */
  step?: number;
  /**
   * The Slider thumb tooltip content.
   */
  tooltipContent?: React.ReactNode | React.ReactNode[];
  /**
   * Max tooltip props.
   */
  tooltipProps?: Omit<TooltipProps, 'content'>;
  /**
   * The type of Slider.
   * @default 'default'
   */
  type?: SliderType;
  /**
   * The current Slider value. Provide an array for range Slider.
   */
  value: number | number[];
  /**
   * The custom value label of the Slider.
   */
  valueLabel?: string | string[];
}
