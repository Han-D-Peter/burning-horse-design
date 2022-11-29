import { btnActionColor, btnSize, colors } from './constants/constants';

type Color = 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink';
type Size = 'xs' | 'sm' | 'md' | 'lg';

export const getBtnColorFromPallete = (color: Color) => {
  if (color === 'gray') {
    return btnActionColor.gray;
  }
  if (color === 'red') {
    return btnActionColor.red;
  }
  if (color === 'orange') {
    return btnActionColor.orange;
  }
  if (color === 'yellow') {
    return btnActionColor.yellow;
  }
  if (color === 'green') {
    return btnActionColor.green;
  }
  if (color === 'teal') {
    return btnActionColor.teal;
  }
  if (color === 'blue') {
    return btnActionColor.blue;
  }
  if (color === 'cyan') {
    return btnActionColor.cyan;
  }
  if (color === 'purple') {
    return btnActionColor.purple;
  }
  if (color === 'pink') {
    return btnActionColor.pink;
  }
};

export const getSizeFromConstants = (size: Size) => {
  return btnSize[size];
};
