// types
import { PdfFile } from "models/datoCMS";

export type FullscreenPdfViewerProps = {
  /**
   * PDF-file metadata
   */
  pdfFile: PdfFile;
  /**
   * The title of the PDF-document
   */
  pdfTitle: string;
};

const FullscreenPdfViewer = ({ pdfFile, pdfTitle }: FullscreenPdfViewerProps) => {
  return (
    <>
      <iframe src={pdfFile.url} id="pdf" title={pdfTitle} className="w-full h-screen" />
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
            border: 0;
            border-style: none;
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default FullscreenPdfViewer;
