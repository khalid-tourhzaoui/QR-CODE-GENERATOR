import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
function TabsContentText() {
  const [url, setUrl] = React.useState("");
  return (
    <TabsContent value="link">
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="url" className="font-semibold text-[#057FFF]">
            URL
          </Label>
          <Input
            id="url"
            type="text"
            value={url}
            placeholder="https://example.com"
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border-2 bg-transparent  border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
          />
        </div>
      </div>
    </TabsContent>
  );
}

export default TabsContentText;
