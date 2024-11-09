import React, { useState } from "react";
import { translateText } from "./TranslateService"; // Import translation service

const TranslationForm = ({ extractedText }) => {
  const [text, setText] = useState(extractedText || ""); // Text to translate
  const [translatedText, setTranslatedText] = useState(""); // Translated text
  const [targetLanguage, setTargetLanguage] = useState("es"); // Default target language (Spanish)

  const handleTranslate = async () => {
    const result = await translateText(text, targetLanguage);
    setTranslatedText(result);
  };

  return (
    <div>
      <h2>Extracted Text:</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text from the PDF"
        rows="5"
        cols="50"
        readOnly
      />
      <br />
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="zh">Chinese</option>
        <option value="ar">Arabic</option>
        {/* Add more languages as needed */}
      </select>
      <br />
      <button onClick={handleTranslate}>Translate</button>
      <div>
        {translatedText && (
          <>
            <h3>Translated Text:</h3>
            <p>{translatedText}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TranslationForm;
