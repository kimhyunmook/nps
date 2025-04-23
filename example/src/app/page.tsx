"use client";
import { UiProvier, Container } from "../../../src/index";
import Test from "./test";
export default function Home() {
  return (
    <UiProvier>
      <Container title="테스트">
        <div>1234</div>
        <Test test="" test1="" test2="" />
      </Container>
    </UiProvier>
  );
}
