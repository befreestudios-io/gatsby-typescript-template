/* eslint-disable implicit-arrow-linebreak */
import Dimensions from '@/theme/constants/dimensions';

/**
 * @name padY
 * @param value number
 * @returns string
 */
const padY = (value: number): string =>
  `padding-top: ${value}px; padding-bottom: ${value}px;`;

/**
 * @name padX
 * @param value number
 * @returns string
 */
const padX = (value: number): string =>
  `padding-left: ${value}px; padding-right: ${value}px;`;

/**
 * @name getEmSize
 * @param size number
 * @returns number
 */
const getEmSize = (size: number): number => size / Dimensions.fontSizes.regular;

/**
 * @name getStyledBorder
 * @param size
 * @param color
 * @returns string
 */
const getStyledBorder = (size: number, color: string): string =>
  `border: ${size}px solid ${color}; border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;`;

export default {
  getEmSize,
  padY,
  padX,
  getStyledBorder,
};
