import styled from 'styled-components'
import { colors } from '../../components/enums'

export const Button = styled.button`
  margin-top: 15px;
  padding: 0.5em 32px;
  letter-spacing: '0px';
  font-size: 16;
  
  border: 3px solid ${colors.lightBlue};
  box-sizing: border-box;
  border-radius: 43px;
  
  font-family: 700 16px/1.2 "Poppins";
  font-weight: bold;
  line-height: 31px;

  cursor: pointer;
  color: ${colors.lightBlue};
`

export const MainModelContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  
  top: 0px;
  left: 0px;
`