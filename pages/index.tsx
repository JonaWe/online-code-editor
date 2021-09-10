import type { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';
import Editor from '../components/Editor';

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const Home: NextPage = () => {
  const [value, setValue] = useState('');
  console.log(value);

  return (
    <>
      <Title>Titel</Title>
      <Editor language="javascript" value={value} onChange={setValue} />
    </>
  );
};

export default Home;
