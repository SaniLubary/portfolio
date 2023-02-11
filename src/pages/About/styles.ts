import styled from "styled-components";

export const ModelContainer = styled.div<{onLeft?: boolean}>`
  position: absolute;
  height: 400px;
  width: 400px;
  ${ props => 
    props.onLeft 
    ? 'left: 0;'
    : 'right: -3em; transform: scaleX(-1);'}
  top: 10em;
`