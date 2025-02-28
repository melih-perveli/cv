/// <reference types="vite/client" />

declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number;
    filename?: string;
    image?: {
      type?: string;
      quality?: number;
    };
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      letterRendering?: boolean;
      logging?: boolean;
      allowTaint?: boolean;
      scrollX?: number;
      scrollY?: number;
      windowWidth?: number;
      windowHeight?: number;
      imageTimeout?: number;
      removeContainer?: boolean;
      foreignObjectRendering?: boolean;
    };
    jsPDF?: {
      unit?: string;
      format?: string;
      orientation?: string;
      compress?: boolean;
      precision?: number;
      putOnlyUsedFonts?: boolean;
      floatPrecision?: number;
    };
    enableLinks?: boolean;
    pagebreak?: {
      mode?: string;
      before?: string[];
      after?: string[];
      avoid?: string[];
    };
  }

  interface Html2PdfInstance {
    set(options: Html2PdfOptions): Html2PdfInstance;
    from(element: HTMLElement): Html2PdfInstance;
    save(): Promise<void>;
    toPdf(): any;
    output(type: string, options?: any): any;
  }

  function html2pdf(): Html2PdfInstance;
  export = html2pdf;
}

declare module 'jspdf-html2canvas' {
  interface PdfOptions {
    orientation?: 'portrait' | 'landscape';
    unit?: 'mm' | 'cm' | 'in' | 'px' | 'pt';
    format?: string | [number, number];
    compress?: boolean;
    precision?: number;
    putOnlyUsedFonts?: boolean;
    floatPrecision?: number;
  }

  interface Html2CanvasOptions {
    allowTaint?: boolean;
    useCORS?: boolean;
    scale?: number;
    letterRendering?: boolean;
    logging?: boolean;
    scrollX?: number;
    scrollY?: number;
    windowWidth?: number;
    windowHeight?: number;
    imageTimeout?: number;
    removeContainer?: boolean;
    foreignObjectRendering?: boolean;
  }

  interface TextLayerOptions {
    opacity?: number;
    color?: string;
    fontSize?: number;
  }

  interface CustomOptions {
    enableTextSelection?: boolean;
    addTextLayer?: boolean;
    quality?: number;
    textLayerOptions?: TextLayerOptions;
  }

  interface GeneratePdfOptions {
    fileName?: string;
    pdfOptions?: PdfOptions;
    html2CanvasOptions?: Html2CanvasOptions;
    customOptions?: CustomOptions;
    onProgress?: (progress: number) => void;
  }

  export function generatePdf(
    element: HTMLElement,
    options?: GeneratePdfOptions
  ): Promise<void>;
}
