import React from "react";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import SpecificSection from "../SpecificSection";
import { Content, Wrapper } from "./styles";
import Header from "../Header";
// import Footer from "../Footer";

const Model3 = () =>{

  document.title = "Model 3 | Tesla";
  return(
    <Wrapper>
      <Header textColor='white' />
      <Content>
        <SpecificSection 
        title="Model 3" 
        desc="Plaid" 
        backgroundVideo="videos/Model-3.webm" 
        arrow="true" 
        range='358'
        speed='3.1'
        top='162'
      />
      </Content>
      <Content>
        <Interior/>
      </Content>
      <Content>
        <Specs/>
      </Content>
      {/* <Footer bottom='bottom'/> */}
    </Wrapper>
  )
}

export default Model3;


