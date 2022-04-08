import styled from 'styled-components'

export const Description = styled.div`
  font: 44px/1.2 "Poppins", Helvetica, Arial, serif;
  font-style: normal;
  font-weight: normal;
  line-height: 64px;

  letter-spacing: 0px;
  color: #EEEEEE;
`

export const DescriptionText = styled.h2<{ large?: boolean }>`
  font-size: ${props => !props.large ? "0.5" : "64px"};
  line-height: 1.2;
`;

export const DescriptionButton = styled.button`
  margin-top: 15px;
  padding: 0.5em 32px;
  letter-spacing: '0px';

  border: 3px solid #00ADB5;
  box-sizing: border-box;
  border-radius: 43px;
  
  font-family: 700 16px/1.2 "Poppins";
  font-weight: bold;
  line-height: 31px;

  color: #00ADB5;
`

export const ModelContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  
  top: 0px;
  left: 0px;

  z-index: -1;

  @media (max-width: 575.98px) {
    top: 100px;
    left: -200px;
  }
`

export const Body = styled.div`
  padding: 248px 64px;
`