import { useState, useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

export default function BarcodeScanner({ onScan }) {
  const videoRef = useRef(null);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    if (scanning) {
      codeReader
        .decodeFromVideoDevice(null, videoRef.current, (result, err) => {
          if (result) {
            setScanning(false);
            onScan(result.text);
          }
        })
        .catch((err) => console.error(err));
    }
    return () => codeReader.reset();
  }, [scanning]);

  return (
    <div className="scanner-container">
      <video ref={videoRef} className="scanner-video"></video>
      <button onClick={() => setScanning(true)} className="button">
        {scanning ? "Scanning..." : "Start Barcode Scan"}
      </button>
    </div>
  );
}
