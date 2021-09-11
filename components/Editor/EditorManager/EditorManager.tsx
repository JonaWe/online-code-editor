import { Dispatch, SetStateAction, useState } from 'react';
import { Language } from '../CoreEditor/CoreEditor';
import EditorBar from '../EditorBar/EditorBar';
import EditorGroup from '../EditorGroup';

const EditorManager = () => {
  const [activeEditor, setActiveEditor] = useState<Language>('xml');
  return (
    <>
      <EditorBar
        setActiveEditor={setActiveEditor}
        activeEditor={activeEditor}
      />
      <EditorGroup active={activeEditor} />
    </>
  );
};

export default EditorManager;
