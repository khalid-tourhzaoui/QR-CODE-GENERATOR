"use client";
import React from "react";
import { Download, LayoutGrid } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
function QrCodeLayout({ url, color, bgColor, logo, handleDownload }) {

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
      <div className="flex justify-center space-x-4 pb-6">
        <Button variant="outline" onClick={() => handleDownload("png")}>
          <Download className="w-4 h-4 mr-2" />
          Download PNG
        </Button>
        <Button variant="outline" onClick={() => handleDownload("svg")}>
          <Download className="w-4 h-4 mr-2" />
          Download SVG
        </Button>
      </div>
    </div>
  );
}

export default QrCodeLayout;
