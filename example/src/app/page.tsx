"use client";
import { UiProvider, Container, FncType } from "../../../src/index";
import Arr from "./component/arr";
import Fnc from "./component/fnc";
import Test from "./component/test";

export default function Home() {
  return (
    <UiProvider clickAble={true}>
      <Container title="테스트">
        <Test test="" test1="" test2="" />
        <Arr arr={[1, 2, 3, 4]} />
        <Fnc fnc={() => FncType("string|number")} />
      </Container>
      <Container title="테스트2">
        <Test test="" test1="" test2="" />
        <Arr arr={[1, 2, 3, 4]} />
        <Fnc fnc={() => FncType("string|number")} />
      </Container>
    </UiProvider>
  );
}
