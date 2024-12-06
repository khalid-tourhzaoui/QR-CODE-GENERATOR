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
          <Label htmlFor="email" className="font-bold text-white text-md">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 placeholder:font-bold bg-white border-2 border-[#057FFF] outline-none focus-visible:ring-0 rounded-md 
            border-r-[7px] border-l-[7px] placeholder:text-md placeholder:text-black"
          />
        </div>

        {/* Sujet */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="font-bold text-white text-md">
            Subject
          </Label>
          <Input
            id="subject"
            type="text"
            value={subject}
            placeholder="Enter your subject"
            onChange={(e) => setSubject(e.target.value)}
            className="w-full h-12 placeholder:font-bold bg-white border-2 border-[#057FFF] outline-none focus-visible:ring-0 rounded-md 
            border-r-[7px] border-l-[7px] placeholder:text-md placeholder:text-black"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="font-bold text-white text-md">
            Message
          </Label>
          <Textarea
            id="message"
            value={message}
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full placeholder:font-bold bg-white border-2 border-[#057FFF] outline-none focus-visible:ring-0 rounded-md 
            border-r-[7px] border-l-[7px] placeholder:text-md placeholder:text-black h-24 resize-none"
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
