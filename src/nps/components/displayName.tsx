import { ComponenetValue } from "../types/npsType";
import s from "../styles/displayName.module.css";
import { useToaster } from "./toaster/toasterProvider";
import documentImg from "../assets/img/document.svg";
import Image from "./Image";

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
      <div className={s.img}>
        <Image src={documentImg} alt="복사" />
      </div>
    </div>
  );
}
