"use client";
import React from "react";
import Nps, { NpsLayout } from "@/nps/nps";
import "./styles.css";
import Image from "next/image";

export default function Text() {
  return (
    <Nps>
      <NpsLayout title="list">
        <div>
          <p>1</p>
        </div>
        <div>112</div>
      </NpsLayout>
    </Nps>
  );
}

function LinkImage({ src, alt }: { src: string; alt: string }) {
  const att = {
    src,
    alt,
    width: 350,
    height: 280,
  };
  return (
    <li>
      <Image {...att} />
    </li>
  );
}
