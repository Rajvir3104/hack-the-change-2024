import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.mjs`;

export const parsePDF = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const typedArray = new Uint8Array(e.target.result);
      getDocument(typedArray).promise
        .then((pdf) => {
          let text = "";
          const numPages = pdf.numPages;

          const pagePromises = [];
          for (let i = 1; i <= numPages; i++) {
            pagePromises.push(
              pdf.getPage(i).then((page) => {
                return page.getTextContent().then((content) => {
                  content.items.forEach((item) => {
                    text += item.str + " ";
                  });
                });
              })
            );
          }

          Promise.all(pagePromises).then(() => {
            resolve(text);
          });
        })
        .catch(reject);
    };
    fileReader.readAsArrayBuffer(file);
  });
};
