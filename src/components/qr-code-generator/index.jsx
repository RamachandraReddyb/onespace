import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  const handleQRGenerator = () => {
    setInput(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div
      style={{
        width: "100%",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>
        QR Code Generator <hr />
      </h1>

      <div
        className="flex"
        style={{
          width: "300px",
          margin: "10px 0 auto",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          name="price"
          id="price"
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Type here..."
          style={{
            width: "100%",
            border: "1px solid orange",
            margin: "10px 0 10px 0",
          }}
          ref={inputRef}
        />
        <button
          style={{
            padding: "8px",
            margin: "0 0 10px 0",
            background: "lightblue",
          }}
          onClick={handleQRGenerator}
        >
          Generate
        </button>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={input}
          viewBox={`0 0 123 256`}
        />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
