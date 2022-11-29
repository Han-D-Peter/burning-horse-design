import React from 'react';
import styled from '@emotion/styled';
import { getBtnColorFromPallete, getSizeFromConstants } from '../utils';
import { colors } from '../constants/constants';

type Color = 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink';
type Size = 'xs' | 'sm' | 'md' | 'lg';
type Variant = 'solid' | 'outline' | 'ghost' | 'link';

interface ButtonProps {
  /**
   * What color to use
   */
  colorScheme: Color;

  /**
   * How large should the button be?
   */
  size: Size;

  /**
   * Visual Style of the Button
   */
  variant: Variant;

  /**
   * You can add left icon to the Button
   */
  leftIcon?: React.FC;
  /**
   * You can add right icon to the Button
   */
  rightIcon?: React.FC;

  /**
   * isLoading state will show a spinner
   */
  isLoading: boolean;

  /**
   * while is loading, you can show loadingText in Button
   */
  loadingText: string;

  /**
   * where spinner is, on left of loadingText or right of loadingText
   */
  spinnerPlacement: 'start' | 'end';

  children: React.ReactNode;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ colorScheme = 'blue', size = 'md', variant = 'solid', leftIcon, rightIcon, isLoading, loadingText, spinnerPlacement, children, onClick }: ButtonProps) => {
  return (
    <StyledButton colorScheme={colorScheme} size={size} type="button">
      Click
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray.gray0};
  border-radius: 6px;
  border: none;
  background-color: ${(props: ButtonProps) => getBtnColorFromPallete(props.colorScheme)?.normal};
  &:hover {
    background-color: ${(props: ButtonProps) => getBtnColorFromPallete(props.colorScheme)?.hover};
  }
  &:active {
    background-color: ${(props: ButtonProps) => getBtnColorFromPallete(props.colorScheme)?.active};
  }
  ${({ size }: { size: Size }) => {
    const boxSize = getSizeFromConstants(size);
    return {
      width: boxSize.width,
      height: boxSize.height,
    };
  }}}
`;
