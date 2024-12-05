"use client";
import React from 'react'
import { CardHeader, CardTitle } from "@/components/ui/card";
function CardHead() {
  return (
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-center text-[#037fff]">
        QR Code Generator
      </CardTitle>
    </CardHeader>
  )
}

export default CardHead