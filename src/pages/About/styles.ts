import styled from "styled-components";

export const ModelContainer = styled.div<{leftSide?: boolean}>`
  position: absolute;
  height: 400px;
  width: 400px;
  ${ props => 
    props.leftSide 
    ? 'left: 0;'
    : 'right: -3em; transform: scaleX(-1);'}
  top: 10em;
`