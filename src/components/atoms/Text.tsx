import React from 'react';
import styled from 'styled-components';

const TextSmall = styled.span`
  font: 16 "Poppins", Helvetica, Arial, serif;
`;
const TextMedium = styled.span`
  font: 44px/1.2 "Poppins", Helvetica, Arial, serif;
  line-height: 1.2;
`;
const TextLarge = styled.span`
  font: 64px "Poppins", Helvetica, Arial, serif;
  line-height: 1.2;
`;

const TextDefaults = styled.section`
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0px;
  color: #EEEEEE;
`

type Props = {
  size: 'small' | 'medium' | 'large',
  className?: string,
  children: React.ReactChild | React.ReactChild[]
};

export const Text = ({ size, children, className }: Props) => {
  return <TextDefaults className={className}>
    {size === 'small' && <TextSmall>{children}</TextSmall>}
    {size === 'medium' && <TextMedium>{children}</TextMedium>}
    {size === 'large' && <TextLarge>{children}</TextLarge>}
  </TextDefaults>
};
