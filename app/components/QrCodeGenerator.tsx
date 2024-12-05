"use client";
import React from "react";
import { Card, CardContent} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, Mail } from "lucide-react";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import CardHead from "./CardHead";
import TabsContentText from "./TabsContentText";
import TabsContentEmail from "./TabsContentEmail";
import QrCodeAttribute from "./QrCodeAttribute";
import QrCodeLayout from "./QrCodeLayout";
function QrCodeGenerator() {
  const [url, setUrl] = React.useState("");
  const [color, setColor] = React.useState("#ffffff");
  const [bgColor, setBgColor] = React.useState("#057FFF");
  const [logo, setLogo] = React.useState<string | null>(null);
  const [logoFile, setLogoFile] = React.useState<File | null>(null);
  const [qrType, setQrType] = React.useState("link");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleDownload = (type: "png" | "svg") => {
    const qrCodeElem = document.getElementById("qr-code");

    if (qrCodeElem) {
      if (type === "png") {
        toPng(qrCodeElem)
          .then((dataUrl) => {
            saveAs(dataUrl, "qr-code.png");
          })
          .catch((err) => {
            console.log("Error generating QR code", err);
          });
      } else if (type === "svg") {
        const svgElem = qrCodeElem.querySelector("svg");

        if (svgElem) {
          const saveData = new Blob([svgElem.outerHTML], {
            type: "image/svg+xml;charset=utf-8",
          });
          saveAs(saveData, "qr-code.svg");
        }
      }
    }
  };

  const handleEmailInput = () => {
    const mailToLink = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(
      message
    )}`;

    setUrl(mailToLink);
  };

  return (
    <div className="relative z-30 mx-6 my-4 flex max-w-[1250px] w-full min-h-[750px] h-full">
      <Card className="flex-1 flex flex-col w-full h-auto mx-auto bg-[#ecf7ff]/80 backdrop-blur-md shadow-sm border-2 border-white/40 rounded-xl">
        {/* En-tête de la carte */}
        <CardHead />

        <CardContent className="flex-1">
          <div className="h-full flex flex-col md:flex-row gap-8">
            {/* Section de configuration */}
            <div className="flex-1 space-y-6">
              {/* Onglets */}
              <Tabs
                defaultValue="link"
                className="space-y-6"
                onValueChange={(val) => setQrType(val)}
              >
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

                {/* Contenu de l'onglet "Link" */}
                <TabsContentText url={url} setUrl={setUrl} />

                {/* Contenu de l'onglet "Email" */}
                <TabsContentEmail
                  email={email}
                  setEmail={setEmail}
                  message={message}
                  setMessage={setMessage}
                  subject={subject}
                  setSubject={setSubject}
                  handleEmailInput={handleEmailInput}
                />
              </Tabs>

              {/* Couleurs et logo */}
              <QrCodeAttribute
                color={color}
                setColor={setColor}
                bgColor={bgColor}
                setBgColor={setBgColor}
                logo={logo}
                setLogo={setLogo}
                logoFile={logoFile}
                setLogoFile={setLogoFile}
              />
            </div>

            {/* Section d'aperçu */}
            <QrCodeLayout
              url={url}
              color={color}
              bgColor={bgColor}
              logo={logo}
              handleDownload={handleDownload}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default QrCodeGenerator;
