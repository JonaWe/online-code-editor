import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Editor from '../Editor';
import { Language } from '../Editor/Editor';

interface EditorGroupProps {
  active: Language;
  setSrcDocument: Dispatch<SetStateAction<string>>;
}

const EditorGroup = ({ active, setSrcDocument }: EditorGroupProps) => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

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

  if (active === 'xml') {
    return <Editor language="xml" value={html} onChange={setHtml} />;
  } else if (active === 'css') {
    return <Editor language="css" value={css} onChange={setCss} />;
  } else {
    return <Editor language="javascript" value={js} onChange={setJs} />;
  }
};

export default EditorGroup;
