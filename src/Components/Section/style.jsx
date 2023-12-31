import styled from 'styled-components'

export const Wrap = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image:  ${props => `url(${props.bgImg})`};;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const LeftButton = styled.div`
  background-color: rgba(32, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`
export const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`

export const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`