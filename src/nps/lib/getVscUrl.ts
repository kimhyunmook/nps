import { ReactElement } from "react";

export default function getVscUrl(element: ReactElement) {
  const result =
    typeof element.type === "function" &&
    element.type
      .toString()
      .split("fileName:")[1]
      .trim()
      .split(",")[0]
      .split('"')[1];
  return typeof element.type === "function"
    ? `vscode://file/${result}:${0}:${0}`
    : undefined;
}
