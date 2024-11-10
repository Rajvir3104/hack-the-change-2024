import React from "react";

const TranslationForm = ({ extractedText, setTargetLanguage, handleTranslation }) => {
  return (
    <div>
      <h2>Extracted Text:</h2>
      <textarea
        value={extractedText || ""}
        readOnly
        rows="10"
        cols="50"
      />
      <br />
      <select
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="zh">Chinese</option>
        <option value="ar">Arabic</option>
      </select>
      <br />
      <button onClick={handleTranslation}>Translate</button>
    </div>
  );
};

export default TranslationForm;
