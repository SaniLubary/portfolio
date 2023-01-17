import styled from "styled-components"
import tw from "tailwind-styled-components"

/**
 * Normal view bodies go with this padding, but sections like
 *   'hobbies' section on 'about' view don't use the same padding
 */
export const Body = styled.div`
  padding: 248px 64px;
`
export const BottomSection = tw.div`
  relative
  text-white
  overflow-hidden
`

export const UnderWavesSection = styled.div`
  top: 50%;
  padding-bottom: 4em;
  background: linear-gradient(180deg, #45B888 0%, #40A479 21.57%, #00565A 108.2%);
  background-color: 'blue'
`