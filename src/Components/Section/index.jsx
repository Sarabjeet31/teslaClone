/* eslint-disable react/prop-types */
import React from 'react'
import Fade from 'react-reveal/Fade';
import { ButtonGroup, Buttons, DownArrow, ItemText, LeftButton, RightButton, Wrap } from './style';

const Section = ({ title, desc, leftBtnText, rightBtnText, backgroundImg }) => {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{ title }</h1>
          <p>{ desc }</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              { leftBtnText }
            </LeftButton>
            { rightBtnText && 
              <RightButton>
                { rightBtnText }
              </RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src='/images/down-arrow.svg' />
      </Buttons>
    </Wrap>
  )
}

export default Section