import { useState } from 'react';
import { EditorDocumentContextProvider } from '../../context/editor-document-context';
import EditorManager from '../Editor/EditorManager';
import IFrameDisplay from '../IFrameDisplay';
import TopBar from '../TopBar';

interface ControllerProps {
  initialHTML: string;
  initialCSS: string;
  initialJS: string;
  initialTitle: string;
}

const Controller = (props: ControllerProps) => {
  const [html, setHtml] = useState(props.initialHTML);
  const [css, setCss] = useState(props.initialCSS);
  const [js, setJs] = useState(props.initialJS);

  return (
    <EditorDocumentContextProvider
      value={{ html, setHtml, css, setCss, js, setJs }}
    >
      <TopBar initialTitle={props.initialTitle} />
      <EditorManager />
      <IFrameDisplay />
    </EditorDocumentContextProvider>
  );
};

export default Controller;
