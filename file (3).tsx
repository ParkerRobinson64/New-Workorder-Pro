import React, { useEffect } from "react";
import Quagga from "quagga";

interface Props { onDetected: (code: string) => void; }

export default function BarcodeScanner({ onDetected }: Props) {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          target: document.querySelector("#scanner")
        },
        decoder: { readers: ["code_128_reader", "ean_reader"] }
      },
      err => { if (err) console.error(err); else Quagga.start(); }
    );
    Quagga.onDetected(res => onDetected(res.codeResult.code));
    return () => { Quagga.stop(); Quagga.offDetected(() => {}); };
  }, [onDetected]);

  return <div id="scanner" style={{ width: "100%", height: "260px" }} />;
}
