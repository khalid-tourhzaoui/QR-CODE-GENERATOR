"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function QrCodeAttribute({
  color,
  setColor,
  bgColor,
  setBgColor,
  logo,
  setLogo,
  logoFile,
  setLogoFile,
}) {
  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        {/* Couleur QR Code */}
        <div className="space-y-4 flex-1">
          <Label htmlFor="color" className="font-bold text-white text-md">
            QR Code Color
          </Label>
          <div className="flex items-center gap-1">
            <div
              className="relative w-12 flex-1 h-12 rounded-md border-2 border-white/70"
              style={{ backgroundColor: color }}
            >
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <Input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="flex-1 w-full h-12 placeholder:font-bold bg-white border-2 border-[#057FFF] outline-none focus-visible:ring-0 
              rounded-md border-r-[7px] border-l-[7px] placeholder:text-md placeholder:text-black"
            />
          </div>
        </div>

        {/* Couleur d'arrière-plan */}
        <div className="space-y-4 flex-1">
          <Label
            htmlFor="bgColor"
            className="font-bold text-white text-md"
          >
            Background Color
          </Label>
          <div className="flex items-center gap-1">
            <div
              className="relative w-12 flex-1 h-12 rounded-md border-2 border-white/70"
              style={{ backgroundColor: bgColor }}
            >
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <Input
              type="text"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="flex-1 w-full h-12 placeholder:font-bold bg-white border-2 border-[#057FFF] outline-none focus-visible:ring-0 
              rounded-md border-r-[7px] border-l-[7px] placeholder:text-md placeholder:text-black"
            />
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="space-y-4">
        <Label htmlFor="logo" className="font-bold text-white text-md">
          Logo
        </Label>
        <Input
          type="file"
          id="logo"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setLogoFile(e.target.files[0]);
              const reader = new FileReader();
              reader.onloadend = () => {
                setLogo(reader.result as string);
              };
              reader.readAsDataURL(e.target.files[0]);
            }
          }}
          className="w-full h-12 placeholder:font-bold bg-white border-2 border-[#057FFF] outline-none focus-visible:ring-0 
              rounded-md border-r-[7px] border-l-[7px] placeholder:text-md placeholder:text-black"
        />
      </div>
    </div>
  );
}

export default QrCodeAttribute;
