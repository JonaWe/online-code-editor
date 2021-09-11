import { useEffect, useState } from 'react';
import { EditorDocumentContextProvider } from '../../context/editor-document-context';
import EditorManager from '../Editor/EditorManager';
import IFrameDisplay from '../IFrameDisplay';

interface EditorAndIFrameProps {
  initialHTML: string;
  initialCSS: string;
  initialJS: string;
}

const EditorAndIFrame = ({
  initialHTML,
  initialCSS,
  initialJS,
}: EditorAndIFrameProps) => {
  const [html, setHtml] = useState(initialHTML);
  const [css, setCss] = useState(initialCSS);
  const [js, setJs] = useState(initialJS);
  const [srcDocument, setSrcDocument] = useState('');

  useEffect(() => {
    console.log('updated src');
    setSrcDocument(`
    <html>
      <style>${css}</style>
      <body>${html}</body>
      <script>${js}</script>
    </html>
  `);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [html, css, js]);
  return (
    <>
      <EditorDocumentContextProvider
        value={{ html, setHtml, css, setCss, js, setJs }}
      >
        <EditorManager />
      </EditorDocumentContextProvider>
      <IFrameDisplay srcDocument={srcDocument} />
    </>
  );
};

export default EditorAndIFrame;
