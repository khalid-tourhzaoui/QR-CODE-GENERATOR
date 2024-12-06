"use client";
import React from "react";
import { Download, LayoutGrid } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";

// Define the types for the props
interface QrCodeLayoutProps {
  url: string; // The URL to generate the QR code
  color: string; // The color for the QR code
  bgColor: string; // The background color for the QR code
  logo?: string | null; // Optional logo URL to display in the center of the QR code
  handleDownload: (format: "png" | "svg") => void; // Function to handle downloading the QR code
}

function QrCodeLayout({
  url,
  color,
  bgColor,
  logo,
  handleDownload,
}: QrCodeLayoutProps) {
  return (
    <div className="relative flex-1 bg-[#037FFF] rounded-lg flex flex-col justify-center space-y-6">
      <span>
        <LayoutGrid className="w-8 h-8 text-white absolute top-4 right-4" />
      </span>
      <div id="qr-code" className="flex justify-center p-8">
        <div className="relative">
          <QRCodeSVG
            value={url}
            size={256}
            fgColor={color}
            bgColor={bgColor}
            imageSettings={
              logo
                ? { src: logo, height: 50, width: 50, excavate: true }
                : undefined
            }
          />
          {logo && (
            <img
              src={logo}
              alt="logo"
              className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-md border-none"
            />
          )}
        </div>
      </div>
      {/* <div className="flex justify-center  space-x-4 pb-2">
        <Button variant="outline" onClick={() => handleDownload("png")} >
          <Download className="w-4 h-4 mr-2" />
          Download PNG
        </Button>
        <Button variant="outline" onClick={() => handleDownload("svg")}>
          <Download className="w-4 h-4 mr-2" />
          Download SVG
        </Button>
      </div> */}
      <div className="flex justify-center flex-wrap gap-4 pb-2">
        <Button
          variant="outline"
          className="w-full md:w-auto px-4 py-2 text-sm md:text-base flex items-center justify-center gap-2 hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          onClick={() => handleDownload("png")}
        >
          <Download className="w-5 h-5 mr-2" />
          Download PNG
        </Button>
        <Button
          variant="outline"
          className="w-full md:w-auto px-4 py-2 text-sm md:text-base flex items-center justify-center gap-2 hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          onClick={() => handleDownload("svg")}
        >
          <Download className="w-5 h-5 mr-2" />
          Download SVG
        </Button>
      </div>

    </div>
  );
}

export default QrCodeLayout;
