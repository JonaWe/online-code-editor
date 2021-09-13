import { useEffect, useState } from 'react';
import { useEditorDocumentContext } from '../../context/editor-document-context';
import { IFrame } from './IFrameDisplay.elements';

const IFrameDisplay = () => {
  const [srcDocument, setSrcDocument] = useState('');

  const { html, css, js } = useEditorDocumentContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDocument(`
    <html>
      <style>${css}</style>
      <body>${html}</body>
      <script>${js}</script>
    </html>
  `);
    }, 350);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <IFrame
      title="Output"
      srcDoc={srcDocument}
      sandbox="allow-scripts"
      width="100%"
      height="100%"
    />
  );
};

export default IFrameDisplay;
