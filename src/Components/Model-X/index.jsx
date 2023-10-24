import React from "react";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import SpecificSection from "../SpecificSection";
import { Content, Wrapper } from "./styles";
import Header from "../Header";
// import Footer from "../Footer";

const ModelX = () =>{
  document.title = "Model X | Tesla";
  return(
    <Wrapper>
      <Header textColor='white' />
      <Content>
        <SpecificSection 
          title="Model X" 
          desc="Plaid" 
          backgroundVideo="videos/Model-X.webm" 
          arrow="true" 
          range='333'
          speed='2.5'
          top='175'
          hp='1,020'
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

export default ModelX

