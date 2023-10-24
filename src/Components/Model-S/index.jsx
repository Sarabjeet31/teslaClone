import React from "react";
import Interior from "../Interior_Specs";
import Specs from "../Gen_Spec";
import SpecificSection from "../SpecificSection";
import { Content, Wrapper } from "./style";
import Header from "../Header";
// import Footer from "../Footer";

const ModelS = () =>{

  document.title = "Model S | Tesla";
  return(
    <Wrapper>
      <Header textColor='white' />
      <Content>
        <SpecificSection 
          title="Model S" 
          desc="Plaid" 
          backgroundVideo="videos/Model-S.webm" 
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