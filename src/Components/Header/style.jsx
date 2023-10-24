import styled from 'styled-components'

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  .close{
    font-size: 2.3rem;
    color: black;
    padding: 5px;
    padding-bottom: 2px;
    border-radius: 50%;
    z-index: 5;
    transition: all 300ms ease-in;
    cursor: pointer;
    &:hover{
      background-color: rgba(90, 90, 90, 0.1);
    }
  }
`
export const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in;
  li {
    cursor: pointer;
    padding: 15px 0;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
    a {
      font-weight: 500;
      padding: .5rem;
    }
    &:hover{
      a {
        font-weight: 600;
      }
      background-color: rgba(90, 90, 90, 0.1);
    }
  }

  @media screen and (min-width: 1150px){
    .half {
      display: none;
    }
  }
  @media screen and (min-width: 500px){
    .quarter {
      display: none;
    }
  }
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  z-index: 1;
  .top{
    position: fixed;
    top: 0;
    right: 10px;
    z-index: 10;
    height: 75px;
    width: 270px;
    background-color: white;
    -webkit-animation: cssAnimation 400ms forwards; 
    animation: cssAnimation 400ms forwards;
  }
  @keyframes cssAnimation {
    0%   {opacity: 0;}
    99%  {opacity: 0;}
    100% {opacity: 1;}
  }
  @media screen and (max-width: 1150px){
    .close{
      background-color: lightgrey;
    }
  }

  .logo{
    position: absolute;
    top: 20px;
    left: 48px;
    cursor: pointer;
  }
  img{
    height: 16px;
    width: 120px;
  }

  @media screen and (max-width: 1150px){
    .logo{
      left: 30px;
    }
  }
  @media screen and (max-width: 400px){
    .logo{
      left: 10px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  
  a{
    padding: 7px 16px;
    font-size: 1rem;
    letter-spacing: 0.6px;
    text-decoration: none;
    font-weight: 550;
    border-radius: 10px;
    transition: background-color 200ms ease-in;
    cursor: pointer;
    color: ${ props => props.textColor };
    &:hover{
      background-color: ${ props => props.textColor === 'black' ? 'rgba(90, 90, 90, 0.1)' : 'white'};
      color: ${ props => props.textColor === 'black' ? '' : 'black'};
    }
  }
  
  @media screen and (max-width: 1150px){
    display: none;
  }
`

export const Content1 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: fixed;
  align-items: center;
  right: 30px;
  a{
    padding: 5px 15px;
    font-size: 1rem;
    letter-spacing: 0.6px;
    text-decoration: none;
    font-weight: 550;
    border-radius: 10px;
    transition: background-color 200ms ease-in;
    cursor: pointer;
    color: ${ props => props.textColor };
  }
  .none {
    &:hover{
      background-color: ${ props => props.textColor === 'black' ? 'rgba(90, 90, 90, 0.1)' : 'white'};
      color: ${ props => props.textColor === 'black' ? '' : 'black'};
    }
  }


  @media screen and (max-width: 500px){
    .none{
      display: none;
    }
    a{
      background-color: rgba(90, 90, 90, 0.08);
    }
    right: 20px;
  }
  @media screen and (max-width: 400px){
    right: 15px;
  }
`