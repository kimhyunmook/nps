import s from "../../styles/components/codeBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

export default function CodeBtn({ url }: { url: string | undefined }) {
  return (
    <a className={s.codeBtn} href={url}>
      <FontAwesomeIcon icon={faFileCode} />
    </a>
  );
}
