import axios from 'axios';

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post("https://libretranslate.com/translate", {
      q: text,
      source: "en",  // Source language (you can detect this or set it to 'en')
      target: targetLanguage, // The language to translate to
      format: "text",
    });
    return response.data.translatedText;
  } catch (error) {
    console.error("Error translating text:", error);
    return null;
  }
};
