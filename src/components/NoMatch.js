import React from 'react';
import styled from "styled-components";

 function NoMatch() {
  return (
    <Container>
        <Heading>!!! No Page Founded</Heading>
    </Container>
  )
}
export default NoMatch;
const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Heading = styled.h1`
    display: inline;
    font-size: 40px;
    font-weight: 600;
`;