import React from 'react'
import styled from 'styled-components'

const Header = (props) => (<div>
  <Background>
    <Title>Chocolate</Title>
    <SubTitle>is the answer, who cares what the Question is !!!</SubTitle>
  </Background>
</div>);

const Background = styled.div`
  background: url('images/category_header.jpg');
  height: 200px;
  border-radius: 15px;
`;

const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size:4em;
  color:white;
  padding-top:80px;
  text-align:center;
`

const SubTitle = styled.h3`
  font-size:2em;
  color:white;
  text-align:center;
`
export default Header;