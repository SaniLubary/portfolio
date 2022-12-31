import styled from "styled-components";

export const ModelContainer = styled.div<{onLeft?: boolean}>`
  position: absolute;
  height: 400px;
  width: 400px;
  /* border: 1px solid red; */
  transform: scaleX(1);
  ${ props => 
    props.onLeft 
    ? 'left: -1em;'
    : 'right: -3em; transform: scaleX(-1);'}
  top: 10em;
`