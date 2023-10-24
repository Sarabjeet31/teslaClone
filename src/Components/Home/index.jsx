import React from 'react'
import Section from '../Section'
import { Content, Wrapper } from './style'
import Header from '../Header'

const Home = () => {
  return (
    <Wrapper>
      <Header textColor='black' />
      <Content>
        <Section
          title='Model 3'
          desc='Order Online for Touchless Delivery'
          backgroundImg='/images/model-3.jpg'
          leftBtnText='Custom order'
          rightBtnText='Existing inventory'
        />
      </Content>
      <Content>
        <Section
          title='Model S'
          desc='Order Online for Touchless Delivery'
          backgroundImg='/images/model-s.jpg'
          leftBtnText='Custom order'
          rightBtnText='Existing inventory'
        />
      </Content>
      <Content>
        <Section
          title='Model Y'
          desc='Order Online for Touchless Delivery'
          backgroundImg='/images/model-y.jpg'
          leftBtnText='Custom order'
          rightBtnText='Existing inventory'
        />
      </Content>
      <Content>
        <Section
          title='Model X'
          desc='Order Online for Touchless Delivery'
          backgroundImg='/images/model-x.jpg'
          leftBtnText='Custom order'
          rightBtnText='Existing inventory'
        />
      </Content>
      <Content>
        <Section
          title='Lowest Cost Solar panels in America'
          desc='Money-back guarentee'
          backgroundImg='/images/solar-panel.jpg'
          leftBtnText='Order now'
          rightBtnText='Learn more'
        />
      </Content>
      <Content>
        <Section
          title='Solar for New Roofs'
          desc='Solar Roof Cost Less Than a New Roof Puls Solar Panels'
          backgroundImg='/images/solar-roof.jpg'
          leftBtnText='Order now'
          rightBtnText='Learn more'
        />
      </Content>
      <Content>
        <Section
          title='Accessories'
          desc=''
          backgroundImg='/images/accessories.avif'
          leftBtnText='Shop now'
        />
      </Content>
    </Wrapper>
  )
}

export default Home
