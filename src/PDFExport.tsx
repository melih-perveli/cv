import { useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import App from "./App";
import PDFDocument from "./PDFDocument";

export default function PDFExport() {
  const cvRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PDFDownloadLink
          document={<PDFDocument />}
          fileName="Melih_Perveli_CV.pdf"
          style={{ textDecoration: "none" }}
          // @ts-ignore
          options={{
            compress: true,
          }}
        >
          {" "}
          CV{" "}
        </PDFDownloadLink>
      </div>

      <div ref={cvRef} className="w-full h-full">
        <App />
      </div>
    </div>
  );
}
