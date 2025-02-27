"use cleint";
import { ComponenetValue } from "@/nps/types/npsType";
import s from "./displayName.module.css";
import DocumentIcon from "../../img/document.svg";
import { useToaster } from "../toaster/toasterProvider";

interface DisplayNameProps {
  component: ComponenetValue;
}
export default function DisplayName({ component }: DisplayNameProps) {
  const toaste = useToaster();
  const displayName = !!Object.keys(component?.props ?? {}).find(
    (x) => x === "children"
  )
    ? `<${component.displayName}></${component.displayName}>`
    : `<${component?.displayName} />`;

  async function clipDisplayName() {
    toaste("info", `복사했습니다.`);
    await navigator?.clipboard?.writeText(displayName);
  }

  return (
    <div className={s.displayName} onClick={clipDisplayName}>
      <p>{displayName}</p>
      {/* {displayName} */}
      <div className={s.img}>
        <DocumentIcon width={24} height={24} />
      </div>
    </div>
  );
}
