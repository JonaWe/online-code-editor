import { useEditorDocumentContext } from '../../../context/editor-document-context';
import CoreEditor from '../CoreEditor';
import { Language } from '../CoreEditor/CoreEditor';

interface EditorGroupProps {
  active: Language;
}

const EditorGroup = ({ active }: EditorGroupProps) => {
  const { html, css, js, setHtml, setCss, setJs } = useEditorDocumentContext();

  if (active === 'xml') {
    return <CoreEditor language="xml" value={html} onChange={setHtml} />;
  } else if (active === 'css') {
    return <CoreEditor language="css" value={css} onChange={setCss} />;
  } else {
    return <CoreEditor language="javascript" value={js} onChange={setJs} />;
  }
};

export default EditorGroup;
