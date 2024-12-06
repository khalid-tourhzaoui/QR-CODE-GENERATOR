"use client";
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
function TabsContentText({ url, setUrl }) {
  return (
    <TabsContent value="link">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="url" className="font-semibold text-[#057FFF] text-xl">
            Link
          </Label>
          <Input
            id="url"
            type="text"
            value={url}
            placeholder="https://example.com"
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border-4 bg-transparent border-[#057FFF] focus:border-white/70  outline-none 
                      focus-visible:ring-0 placeholder:text-[#000000] placeholder:font-semibold rounded-md border-r-[5px] border-l-[5px]
                      shadow-[5px_5px_5px_#FFFFFF]"/>
        </div>
      </div>
    </TabsContent>
  );
}

export default TabsContentText;
