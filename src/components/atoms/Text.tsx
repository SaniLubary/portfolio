import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const small = '16px'
const medium = '44px/1.2'
const large = '64px'

const sizes = {
  small, medium, large
}

const TextDefaults = styled.span<{ size: string }>`
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0px;
  color: #EEEEEE;
  font: ${({ size }) => size} "Poppins", Helvetica, Arial, serif;
`

type Props = {
  size: 'small' | 'medium' | 'large',
  className?: string,
  children: (string | React.ReactElement)[] | React.ReactElement | React.ReactElement[] | string[] | string
  style?: CSSProperties
};

export const Text = ({ size, children, className, style }: Props) => {
  return <TextDefaults size={sizes[size]} style={style} className={className}>
    {children}
  </TextDefaults>
};
