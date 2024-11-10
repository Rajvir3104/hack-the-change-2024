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
      <option value="pt">Portuguese</option>
      <option value="ru">Russian</option>
      <option value="ja">Japanese</option>
      <option value="ko">Korean</option>
      <option value="hi">Hindi</option>
      <option value="bn">Bengali</option>
      <option value="pa">Punjabi</option>
      <option value="id">Indonesian</option>
      <option value="tr">Turkish</option>
      <option value="vi">Vietnamese</option>
      <option value="tl">Tagalog</option>
      <option value="pl">Polish</option>
      <option value="uk">Ukrainian</option>
      <option value="he">Hebrew</option>

      </select>
      <br />
      <button onClick={handleTranslation}>Translate</button>
    </div>
  );
};

export default TranslationForm;
