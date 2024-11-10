import React, { useEffect } from 'react';

const GoogleTranslate = ({ isVisible }) => {
  useEffect(() => {
    // A variable to hold the TranslateElement instance
    let translateElementInstance;

    // Initialize Google Translate
    const initializeTranslateElement = () => {
      if (window.google && window.google.translate) {
        translateElementInstance = new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
    };

    // Only initialize the translate element when it's visible
    if (isVisible) {
      // If the Google Translate script is already loaded, initialize it
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        initializeTranslateElement();
      } else {
        // Load the Google Translate script if not loaded
        window.googleTranslateElementInit = initializeTranslateElement;

        if (!document.querySelector('script[src*="translate_a/element.js"]')) {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
          document.body.appendChild(script);
        }
      }
    } else {
      // If not visible, reset the translate element
      if (translateElementInstance) {
        const translateContainer = document.getElementById('google_translate_element');
        if (translateContainer) {
          translateContainer.innerHTML = ''; // Clear any content
        }
        translateElementInstance = null; // Reset the instance
      }
    }

    // Cleanup on unmount or when visibility changes
    return () => {
      if (translateElementInstance) {
        const translateContainer = document.getElementById('google_translate_element');
        if (translateContainer) {
          translateContainer.innerHTML = ''; // Clear any content
        }
        translateElementInstance = null; // Reset the instance
      }
    };
  }, [isVisible]); // Re-run effect when visibility changes

  return (
    <div
      id="google_translate_element"
      style={{ display: isVisible ? 'block' : 'none' }}
    ></div>
  );
};

export default GoogleTranslate;
