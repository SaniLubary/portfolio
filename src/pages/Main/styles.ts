import styled from 'styled-components'

export const Description = styled.section`
  font: 44px/1.2 "Poppins", Helvetica, Arial, serif;
  font-style: normal;
  font-weight: normal;
  line-height: 64px;

  letter-spacing: 0px;
  color: #EEEEEE;
`

export const DescriptionText = styled.p<{ large?: boolean }>`
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

export const MainModelContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  
  top: 0px;
  left: 0px;

  z-index: 1;
`