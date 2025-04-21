import { ReactElement } from "react";

export default function getDisplayName(element: ReactElement) {
  const displayName =
    typeof element.type === "function"
      ? (element.type as any).displayName
        ? (element.type as { displayName?: string }).displayName
        : element.type.name
      : element.type;

  const result = displayName;
  return result;
}
