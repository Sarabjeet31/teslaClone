import React from "react";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import SpecificSection from "../SpecificSection";
import { Content, Wrapper } from "./styles";
// import Footer from "../Footer";

const ModelY = () =>{

  document.title = "Model Y | Tesla";
  return(
    <Wrapper>
      <Content>
        <SpecificSection 
          title="Model Y" 
          desc="Plaid" 
          backgroundImg="model-y.jpg" 
          arrow="true" 
          range='330'
          speed='3.5'
          top='155'
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

export default ModelY


