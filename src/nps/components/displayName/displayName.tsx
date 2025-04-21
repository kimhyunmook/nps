import { ComponenetValue } from "../../types/npsType";
import s from "./displayName.module.css";
import { useToaster } from "../toaster/toasterProvider";
import documentImg from "../../assets/img/document.svg";

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
  const img = documentImg as unknown as { src: string };

  return (
    <div className={s.displayName} onClick={clipDisplayName}>
      <p>{displayName}</p>
      {/* {displayName} */}
      <div className={s.img}>
        <img src={img.src} alt="복사" />
      </div>
    </div>
  );
}
