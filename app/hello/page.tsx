"use client";
import NpsProvider, { Nps, NpsLayout } from "@/nps/nps";

export default function Page() {
  return (
    <NpsProvider>
      <div>1234</div>
      <div>테스트</div>
      <div>
        <span>5050</span>
      </div>
    </NpsProvider>
  );
}
