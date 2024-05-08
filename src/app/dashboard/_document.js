import Document, { Html, Head, Main, NextScript } from 'next/document';
import { pdfjs } from 'react-pdf';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* Load PDF.js script asynchronously */}
          <script
            // src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"
            src="pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;            "
            defer
          />
        </body>
      </Html>
    );
  }
}
