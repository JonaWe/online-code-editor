import React, { Dispatch, SetStateAction, useContext } from 'react';

interface EditorDocumentContext {
  html: string;
  css: string;
  js: string;
  setHtml: Dispatch<SetStateAction<string>>;
  setCss: Dispatch<SetStateAction<string>>;
  setJs: Dispatch<SetStateAction<string>>;
}

const initialState = {
  html: '',
  css: '',
  js: '',
  setHtml: () => undefined,
  setCss: () => undefined,
  setJs: () => undefined,
};

const Context = React.createContext<EditorDocumentContext>(initialState);

const EditorDocumentContextProvider = Context.Provider;

const useEditorDocumentContext = () => {
  return useContext(Context);
};

export { EditorDocumentContextProvider, useEditorDocumentContext };
