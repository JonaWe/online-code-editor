import { Controlled } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-palenight.css';
// import 'codemirror/theme/dracula.css';
// import 'codemirror/theme/material-darker.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/theme/ayu-dark.css';

if (typeof navigator !== 'undefined') {
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
  require('codemirror/mode/javascript/javascript');
}

export type Language = 'xml' | 'javascript' | 'css';

interface EditorProps {
  language: Language;
  value: string;
  onChange(value: string): void;
}

const Editor = ({ language, value, onChange }: EditorProps) => {
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

export default Editor;
