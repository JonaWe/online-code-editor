import { Dispatch, SetStateAction, useState } from 'react';
import { Language } from '../Editor/Editor';
import EditorBar from '../EditorBar/EditorBar';
import EditorGroup from '../EditorGroup';

interface EditorManagerProps {
  setSrcDocument: Dispatch<SetStateAction<string>>;
}

const EditorManager = ({ setSrcDocument }: EditorManagerProps) => {
  const [activeEditor, setActiveEditor] = useState<Language>('xml');
  return (
    <>
      <EditorBar
        setActiveEditor={setActiveEditor}
        activeEditor={activeEditor}
      />
      <EditorGroup active={activeEditor} setSrcDocument={setSrcDocument} />
    </>
  );
};

export default EditorManager;
