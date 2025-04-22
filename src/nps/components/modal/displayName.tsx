import s from "../../styles/components/displayName.module.css";
import { CSSProperties, useEffect, useState } from "react";
import { ComponenetValue } from "../../types/npsType";
import { useToaster } from "../toaster/toasterProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

interface DisplayNameProps {
  component: ComponenetValue;
}
const init = {
  color: "#fff",
  size: "18px",
};
export default function DisplayName({ component }: DisplayNameProps) {
  const [color, setColor] = useState<CSSProperties["color"]>(init.color);
  const [size, setSize] = useState<CSSProperties["fontSize"]>(init.size);
  const toaste = useToaster();
  const displayName = !!Object.keys(component?.props ?? {}).find(
    (x) => x === "children"
  )
    ? `<${component.displayName}></${component.displayName}>`
    : `<${component?.displayName} />`;

  useEffect(() => {
    setColor(init.color);
    setSize(init.size);
  }, [component]);

  async function clipDisplayName() {
    toaste("info", `복사했습니다.`);
    setColor("#569cd6");
    setSize("20px");
    await navigator?.clipboard?.writeText(displayName);
  }

  return (
    <div className={s.displayName} onClick={clipDisplayName}>
      <p>{displayName}</p>
      <div className={s.img}>
        <FontAwesomeIcon
          icon={faCopy}
          color={color}
          style={{
            transition: "0.2s",
            fontSize: size,
          }}
        />
      </div>
    </div>
  );
}
