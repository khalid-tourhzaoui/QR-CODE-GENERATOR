"use client";
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
function TabsContentText({ url, setUrl }) {
  return (
    <TabsContent value="link">
      <div className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="url" className="font-bold text-white text-md">
            Link
          </Label>
          <Input
            id="url"
            type="text"
            value={url}
            placeholder="https://example.com"
            onChange={(e) => setUrl(e.target.value)}
            className="w-full h-12 placeholder:font-bold bg-white border-2 border-[#057FFF] outline-none focus-visible:ring-0 rounded-md 
            border-r-[7px] border-l-[7px] placeholder:text-md placeholder:text-black"/>
        </div>
      </div>
    </TabsContent>
  );
}

export default TabsContentText;
