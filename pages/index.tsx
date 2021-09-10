import type { NextPage } from 'next';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const Home: NextPage = () => {
  return (
    <>
      <Title>Titel</Title>
    </>
  );
};

export default Home;
