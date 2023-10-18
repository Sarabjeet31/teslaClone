import styled from "styled-components"

export const Wrapper = styled.div`
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(300px);
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
`
export const Content = styled.div`
  scroll-snap-align: start;
`