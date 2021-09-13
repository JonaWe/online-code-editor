import type { NextPage } from 'next';
import Controller from '../components/Controller';

const Home: NextPage = () => {
  return (
    <Controller
      initialHTML="<!-- Add your HTML content here -->"
      initialCSS="/* Add your CSS content here */"
      initialJS="// Add your JS content here"
      initialTitle="Unknown Document"
    />
  );
};

export default Home;
