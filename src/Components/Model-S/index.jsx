import React from "react";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import SpecificSection from "../SpecificSection";
import { Content, Wrapper } from "./style";
// import Footer from "../Footer";

const ModelS = () =>{

  document.title = "Model S | Tesla";
  return(
    <Wrapper>
      <Content>
        <SpecificSection 
          title="Model S" 
          desc="Plaid" 
          backgroundImg="model-s.jpg" 
          arrow="true" 
          range='396'
          speed='1.99'
          top='200'
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

export default ModelS;