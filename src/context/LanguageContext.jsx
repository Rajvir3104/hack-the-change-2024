import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for language
const LanguageContext = createContext();

// Provider to manage the language state
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English
  
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    // Dynamically change language in Google Translate widget
    if (window.google && window.google.translate) {
      window.google.translate.TranslateElement(
        { pageLanguage: language },
        'google_translate_element'
      );
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};
