"use client";
import UiProvider, { Container } from "../../../src/index";
import Test from "./test";
export default function Home() {
  return (
    <UiProvider>
      <Container title="테스트">
        <div>1234</div>
        <Test />
      </Container>
    </UiProvider>
  );
}
