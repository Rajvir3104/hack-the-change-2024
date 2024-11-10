import AWS from 'aws-sdk';

// AWS SDK configuration (Make sure these are securely handled, ideally not in frontend code)

const accesskey = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const secretkey = process.env.REACT_APP_AWS_SECRET_KEY;

AWS.config.update({
  region: 'us-east-2', // Update with your region
  accessKeyId: accesskey, // Use environment variable or backend for security
  secretAccessKey: secretkey,
});

const translate = new AWS.Translate();

export const translateText = async (text, targetLanguage) => {
  try {
    const params = {
      Text: text,                  // Text to translate (can handle an array)
      SourceLanguageCode: 'auto',
      TargetLanguageCode: targetLanguage // Target language (e.g., 'es' for Spanish)
    };

    const data = await translate.translateText(params).promise();

    // Return the translated text
    return data.TranslatedText;
  } catch (error) {
    console.error('Translation failed:');

    // Log detailed error information
    console.error('Error Message:', error.message); // The error message
    console.error('Error Code:', error.code); // The error code
    console.error('Error Stack:', error.stack); // The stack trace (helps track where the error occurred)

    // If the error has more details like status code, log it
    if (error.statusCode) {
      console.error('Status Code:', error.statusCode);
    }
    if (error.requestId) {
      console.error('Request ID:', error.requestId);
    }

    // Provide a fallback error message
    return `Translation failed. Error: ${error.message}. Please try again.`;
  }
};