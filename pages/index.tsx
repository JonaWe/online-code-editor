import type { NextPage } from 'next';
import { useState } from 'react';
import EditorManager from '../components/EditorManager';
import IFrameDisplay from '../components/IFrameDisplay';

const Home: NextPage = () => {
  const [src, setSrc] = useState('');
  return (
    <>
      <EditorManager setSrcDocument={setSrc} />
      <IFrameDisplay srcDocument={src} />
    </>
  );
};

export default Home;
