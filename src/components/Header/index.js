import React from "react";
import { Container, Wrapper, Title, Button } from "./style";
import { Link } from "react-router-dom"



function Home() {
  return (
    <Container> 
      <Wrapper> 
      <Title>Sáude para pessoas Trans </Title>  
      <Button>
      <Link to="/login"> Login / Criar</Link>  
      </Button>
      </Wrapper>     
    </Container>
  )
}

export default Home;