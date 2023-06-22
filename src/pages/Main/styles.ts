import styled from 'styled-components'
import { colors } from '../../components/enums'

export const Description = styled.section`
  font: 44px/1.2 "Poppins", Helvetica, Arial, serif;
  font-style: normal;
  font-weight: normal;
  line-height: 64px;

  letter-spacing: 0px;
  color: ${colors.white};
`

export const DescriptionButton = styled.button`
  margin-top: 15px;
  padding: 0.5em 32px;
  letter-spacing: '0px';

  border: 3px solid ${colors.lightBlue};
  box-sizing: border-box;
  border-radius: 43px;
  
  font-family: 700 16px/1.2 "Poppins";
  font-weight: bold;
  line-height: 31px;

  color: ${colors.lightBlue};
`
