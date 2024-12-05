"use client";
import React from "react";
import { Card, CardContent} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, Mail } from "lucide-react";
import CardHead from "./CardHead";
import TabsContentText from "./TabsContentText";
import TabsContentEmail from "./TabsContentEmail";
import QrCodeAttribute from "./QrCodeAttribute";

function QrCodeGenerator() {
  const [qrType, setQrType] = React.useState("link");
  
  return (
    <div className="relative z-30 mx-6 my-4 flex max-w-[1250px] w-full min-h-[750px] h-full">
      <Card className="flex-1 flex flex-col w-full h-auto mx-auto bg-[#ecf7ff]/80 backdrop-blur-md shadow-sm border-2 border-white/40 rounded-xl">
        <CardHead />
        <CardContent className="flex-1">
          <div className="h-full flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <Tabs defaultValue="link" className="space-y-6" onValueChange={(val) => setQrType(val)}>
                <TabsList className="h-10 w-full grid grid-cols-2 bg-[#057FFF] text-lg">
                  <TabsTrigger value="link" className="text-white font-bold">
                    <Link className="w-4 h-4 mr-2" />
                    Link
                  </TabsTrigger>
                  <TabsTrigger value="email" className="text-white font-bold">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </TabsTrigger>
                </TabsList>
              {/*------------TabsContentText------------*/}
                <TabsContentText/>
              {/*------------TabsContentEmail------------*/}
                <TabsContentEmail/>
              </Tabs>
              {/*------------QrCodeAttribute------------*/}
              <QrCodeAttribute/>
              {/*------------------------*/}
            </div> 
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default QrCodeGenerator;
