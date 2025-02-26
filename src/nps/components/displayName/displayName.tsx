"use cleint";
import { ComponenetValue } from "../../npsModal";
import s from "./displayName.module.css";
import Image from "next/image";

interface DisplayNameProps {
  component: ComponenetValue;
}
export default function DisplayName({ component }: DisplayNameProps) {
  const displayName = !!Object.keys(component?.props ?? {}).find(
    (x) => x === "children"
  )
    ? `<${component.displayName}></${component.displayName}>`
    : `<${component?.displayName} />`;
  async function clipDisplayName() {
    await navigator?.clipboard?.writeText(displayName);
  }

  return (
    <div className={s.displayName} onClick={clipDisplayName}>
      {displayName}
      <Image src={"../img/document.svg"} width={30} height={30} alt="복사" />
    </div>
  );
}
