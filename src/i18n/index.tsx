import React, {useContext} from 'react';
import LocaleContext from './LocaleContext';

interface Translation {
  localeProvider: any;
  t: (str: string) => any;
  changeLocale: (locale: any) => any;
}

const useTranslation = () => {
  let tranlsation: Translation = useContext(LocaleContext);
  return tranlsation;
};

export default useTranslation;
