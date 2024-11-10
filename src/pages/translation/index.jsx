import React, { useState } from "react";
import FileUpload from "../../components/FileUpload";
import { parsePDF } from "../../components/pdfParser";
import { translateText } from "../../components/TranslateService";
import TranslationForm from "../../components/TranslationForm";
import "./style.css"; // Ensure the stylesheet is imported

const Translation = () => {
  const [extractedText, setExtractedText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [loading, setLoading] = useState(false); // Loading state

  const handleFileUpload = async (file) => {
    try {
      const text = await parsePDF(file);
      setExtractedText(text);
      setTranslatedText("");
    } catch (error) {
      console.error("Failed to parse PDF:", error);
      setExtractedText("Failed to parse PDF. Please try again.");
    }
  };

  const handleTranslation = async () => {
    if (!extractedText) return;

    setLoading(true); // Set loading state
    try {
      const translated = await translateText(extractedText, targetLanguage);
      setTranslatedText(translated);
    } catch (error) {
      console.error("Translation failed:", error);
      setTranslatedText(error.message); // Display the error message to the user
    } finally {
      setLoading(false); // Reset loading state
    }
  };


  return (
    <div>
      <h1>PDF Translation Tool</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {extractedText && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}
      {extractedText && (
        <TranslationForm
          extractedText={extractedText}
          setTargetLanguage={setTargetLanguage}
          handleTranslation={handleTranslation}
        />
      )}
      {loading && <p>Translating...</p>}
      {translatedText && (
        <div>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translation;
