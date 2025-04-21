"use client";
import React from "react";
import { Nps, NpsLayout } from "@/nps/nps";
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
