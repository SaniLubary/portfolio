import React from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { WavesSvg } from "../atoms/WaveSvg";


export const BottomSection = tw.div`
  relative
  text-white
  overflow-hidden
`;

export const UnderWavesSection = styled.div`
  top: 50%;
  padding-bottom: 4em;
  background: linear-gradient(180deg, #45B888 0%, #40A479 21.57%, #00565A 108.2%);
  background-color: 'blue';
`;

export const WaveSection: React.FunctionComponent = ({ children }) => {
  return <BottomSection className="dissapearCenter">
    <WavesSvg />
    <UnderWavesSection>
      {children}
    </UnderWavesSection>
  </BottomSection>;
};
