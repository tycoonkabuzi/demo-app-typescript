import { Link } from "react-router";
import styled from "styled-components";

const Main = styled.div``;
const Title = styled.h1``;
const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
`;
const TheLinks = styled.a`
  font-size: 20px;
`;
const Home = () => {
  return (
    <Main>
      <Title>Home</Title>
      <ContainerButton>
        <Link to={"/posts"}>Post list</Link>
        <Link to={"/create"}>Add Post</Link>
      </ContainerButton>
    </Main>
  );
};
export default Home;
