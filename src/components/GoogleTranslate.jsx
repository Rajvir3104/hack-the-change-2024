import React, { useEffect } from 'react';

const GoogleTranslate = ({ isVisible }) => {
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de,zh',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    return () => {
      document.body.removeChild(addScript);
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ display: isVisible ? 'block' : 'none', position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}
    ></div>
  );
};

export default GoogleTranslate;
