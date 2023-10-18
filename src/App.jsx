import Header from "./Components/Header"
import Home from "./Components/Home"
import ModelS from "./Components/Model-S"
import styled from "styled-components"
import ModelX from "./Components/Model-X"
import Model3 from "./Components/Model-3"
import ModelY from "./Components/Model-Y"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/model-s" element={ <ModelS /> } />
          <Route path="/model-3" element={ <Model3 /> } />
          <Route path="/model-y" element={ <ModelY /> } />
          <Route path="/model-x" element={ <ModelX /> } />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App

const Container = styled.div`
  height: 100vh;
`