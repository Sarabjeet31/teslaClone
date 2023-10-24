import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`
export const Content = styled.div`
  flex: 0 0 100%;
  min-width: 100%;
  height: 100%;
  scroll-snap-align: start;
  background-size: cover;
  background-position: center;
`