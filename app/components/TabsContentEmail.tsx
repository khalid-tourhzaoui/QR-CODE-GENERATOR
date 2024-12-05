"use client";
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
function TabsContentEmail({
  email,
  setEmail,
  message,
  setMessage,
  subject,
  setSubject,
  handleEmailInput,
}) {
  return (
    <TabsContent value="email">
      <div className="space-y-4">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="font-semibold text-[#057FFF]">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 bg-transparent border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
          />
        </div>

        {/* Sujet */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="font-semibold text-[#057FFF]">
            Subject
          </Label>
          <Input
            id="subject"
            type="text"
            value={subject}
            placeholder="Enter subject"
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border-2 bg-transparent border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="font-semibold text-[#057FFF]">
            Message
          </Label>
          <Textarea
            id="message"
            value={message}
            placeholder="Enter message"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-2 bg-transparent border-white/70 focus:border-[#057FFF]/70 rounded-md outline-none focus-visible:ring-0 placeholder:text-gray-400 h-24 resize-none"
          />
        </div>

        {/* Bouton de génération */}
        <Button
          className="py-7 px-8 bg-[#057FFF] font-bold rounded-full uppercase"
          onClick={handleEmailInput}
        >
          Generate Email QR Code
        </Button>
      </div>
    </TabsContent>
  );
}

export default TabsContentEmail;
