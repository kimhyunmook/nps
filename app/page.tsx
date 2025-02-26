"use client";
import React from "react";
import Nps, { NpsLayout } from "@/nps/nps";

export default function Text() {
  return (
    <Nps>
      <NpsLayout title="list">
        <div>
          <p>1</p>
        </div>
        <div>112</div>
        <div>1123423423423423</div>
        <Test></Test>
      </NpsLayout>
    </Nps>
  );
}

const Test = () => <div>Test</div>;
