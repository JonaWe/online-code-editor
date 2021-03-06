import { Controlled } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-palenight.css';

if (typeof navigator !== 'undefined') {
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
  require('codemirror/mode/javascript/javascript');
}

export type Language = 'xml' | 'javascript' | 'css';

interface CoreEditorProps {
  language: Language;
  value: string;
  onChange(value: string): void;
}

const CoreEditor = ({ language, value, onChange }: CoreEditorProps) => {
  const handleChange = (editor: any, data: any, value: string) => {
    onChange(value);
  };
  return (
    <Controlled
      value={value}
      onBeforeChange={handleChange}
      options={{
        mode: language,
        lineNumbers: true,
        lineWrapping: true,
        lint: true,
        theme: 'material-palenight',
      }}
      className="code-mirror-wrapper"
    />
  );
};

export default CoreEditor;
