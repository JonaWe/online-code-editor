import { Dispatch, SetStateAction } from 'react';
import { Language } from '../Editor/Editor';
import { Bar, EditorTab } from './EditorBar.elements';

interface EditorBarProps {
  setActiveEditor: Dispatch<SetStateAction<Language>>;
  activeEditor: Language;
}

const EditorBar = ({ setActiveEditor, activeEditor }: EditorBarProps) => {
  return (
    <Bar>
      <EditorTab
        onClick={() => setActiveEditor('xml')}
        isActive={activeEditor === 'xml'}
      >
        HTML
      </EditorTab>
      <EditorTab
        onClick={() => setActiveEditor('css')}
        isActive={activeEditor === 'css'}
      >
        CSS
      </EditorTab>
      <EditorTab
        onClick={() => setActiveEditor('javascript')}
        isActive={activeEditor === 'javascript'}
      >
        JS
      </EditorTab>
    </Bar>
  );
};

export default EditorBar;
