import React, { useState } from "react";
import FileUpload from "../../components/FileUpload"; // Import FileUpload component
import { parsePDF } from "../../components/pdfParser"; // Import PDF parsing utility
import TranslationForm from "../../components/TranslationForm"; // Import TranslationForm component
import { translateText } from "../../components/TranslateService"; // Import PDF parsing utility


const Homepage = () => {
  const [extractedText, setExtractedText] = useState(""); // Store the extracted text
  const [translatedText, setTranslatedText] = useState(""); // Store the translated text
  const [targetLanguage, setTargetLanguage] = useState("es"); // Default target language (Spanish)

  // Function to handle file upload and parse PDF
  const handleFileUpload = async (file) => {
    const text = await parsePDF(file); // Parse the uploaded PDF file
    setExtractedText(text); // Set the extracted text from PDF
    setTranslatedText(""); // Clear previous translation when a new file is uploaded
  };

  // Function to handle translation
  const handleTranslation = async (text) => {
    if (!text) return;

    try {
      // Call the translation API to translate the text
      const translated = await translateText(text, targetLanguage); // Replace with your actual translation logic
      setTranslatedText(translated); // Set the translated text
    } catch (error) {
      console.error("Translation failed:", error);
    }
  };

  return (
    <div>
      <h1>PDF Translation Tool</h1>

      {/* File Upload Component */}
      <FileUpload onFileUpload={handleFileUpload} />

      {/* Display Extracted Text */}
      {extractedText && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}

      {/* Translation Form Component */}
      {extractedText && (
        <TranslationForm
          extractedText={extractedText}
          setTargetLanguage={setTargetLanguage} // Pass the function to set target language
          handleTranslation={handleTranslation} // Function to handle translation
        />
      )}

      {/* Display Translated Text */}
      {translatedText && (
        <div>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Homepage;
