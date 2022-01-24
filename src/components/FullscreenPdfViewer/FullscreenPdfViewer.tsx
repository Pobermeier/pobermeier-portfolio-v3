// types
import { PdfFile } from "models/datoCMS";

export type FullscreenPdfViewerProps = {
  pdfFile: PdfFile;
  pdfTitle: string;
};

const FullscreenPdfViewer = ({ pdfFile, pdfTitle }: FullscreenPdfViewerProps) => {
  return (
    <>
      <iframe src={pdfFile.url} id="pdf" title={pdfTitle} />
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
            border: 0;
            border-style: none;
            overflow: hidden;
          }

          #pdf {
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
};

export default FullscreenPdfViewer;
