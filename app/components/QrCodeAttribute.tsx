import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function QrCodeAttribute() {
  const [color, setColor] = React.useState("#ffffff");
  const [bgColor, setBgColor] = React.useState("#057FFF");
  const [logo, setLogo] = React.useState<string | null>(null);
  const [logoFile, setLogoFile] = React.useState<File | null>(null);
  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <div className="space-y-2 flex-1">
          <Label htmlFor="color" className="font-semibold text-[#057FFF]">
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
              className="flex-1 border-2 h-12 bg-transparent  border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="space-y-2 flex-1">
          <Label htmlFor="color" className="font-semibold text-[#057FFF]">
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
              className="flex-1 border-2 h-12 bg-transparent  border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="logo" className="font-bold text-[#037FFF]">
          Logo
        </Label>

        <Input
          type="file"
          id="logo"
          accept="image/*"
          onChange={(e: any) => {
            if (e.target.files && e.target.files[0]) {
              setLogoFile(e.target.files[0]);

              const reader = new FileReader();
              reader.onloadend = () => {
                setLogo(reader.result as string);
              };
              reader.readAsDataURL(e.target.files[0]);
            }
          }}
          className="w-full border-2 bg-transparent  border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}

export default QrCodeAttribute;
