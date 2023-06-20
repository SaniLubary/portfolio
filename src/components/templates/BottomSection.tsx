import { ReactElement } from "react";
import styled from "styled-components";
import { WavesSvg } from "../atoms/WaveSvg";
import { BottomSection } from "../../Styles/Styles";

export const UnderWavesSection = styled.div`
  top: 50%;
  padding-bottom: 4em;
  background: linear-gradient(180deg, #45B888 0%, #40A479 21.57%, #00565A 108.2%);
  background-color: 'blue';
`;

export const WaveSection = ({ children }: { children: ReactElement }) => {
  return <BottomSection className="dissapearCenter">
    <WavesSvg />
    <UnderWavesSection>
      {children}
    </UnderWavesSection>
  </BottomSection>;
};
