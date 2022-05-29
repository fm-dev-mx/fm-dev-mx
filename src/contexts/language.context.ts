import { createContext, useReducer, ReactNode } from 'react';
import { configLanguage, initialState, languageReducer } from '@/redux/states/language';
import { Context, ContextDispatch, Props } from '@/models';

const init = () => {
  const hasData = localStorage.getItem("language");

  if (hasData === null)
    return initialState;

  if (hasData === configLanguage.language.EN.code)
    return {
      codeLanguage:configLanguage.language.EN.code,
      labels: configLanguage.language.EN.labels
    }

  if (hasData === configLanguage.language.ES.code)
    return {
      codeLanguage:configLanguage.language.ES.code,
      labels: configLanguage.language.ES.labels
    }
}

export const CreateContextLanguage = createContext<Context>({
  language:initialState
});

export const CreateContextDispatch = createContext<ContextDispatch>(() => {});

export const LanguageContext = ({ }:Props) => {
  const [language, dispatch ] = useReducer(languageReducer, initialState, init);

  return (
    <CreateContextDispatch.Provider value={dispatch}>
      <CreateContextLanguage.Provider value={{ language }}>
        {children}
      </CreateContextLanguage.Provider>
    </CreateContextDispatch.Provider>
  )
}
