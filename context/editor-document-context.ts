import React, { Dispatch, SetStateAction, useContext } from 'react';

interface EditorDocumentContext {
  html: string;
  css: string;
  js: string;
  title: string;
  setHtml: Dispatch<SetStateAction<string>>;
  setCss: Dispatch<SetStateAction<string>>;
  setJs: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
}

const initialState = {
  html: '',
  css: '',
  js: '',
  title: '',
  setHtml: () => undefined,
  setCss: () => undefined,
  setJs: () => undefined,
  setTitle: () => undefined,
};

const Context = React.createContext<EditorDocumentContext>(initialState);

const EditorDocumentContextProvider = Context.Provider;

const useEditorDocumentContext = () => {
  return useContext(Context);
};

export { EditorDocumentContextProvider, useEditorDocumentContext };
