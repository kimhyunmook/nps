import s from "../styles/components/codeBtn.module.css";
import vscIcon from "../assets/img/vsc.svg";
import Image from "./Image";

export default function CodeBtn({ url }: { url: string | undefined }) {
  return (
    <a className={s.codeBtn} href={url}>
      <Image src={vscIcon} alt="vsc-icon" />
      {/* <a target="_blank" href="https://icons8.com/icon/9OGIyU8hrxW5/visual-studio-code-2019">비주얼 스튜디오 코드-2019</a> 작가: <a target="_blank" href="https://icons8.com">Icons8</a> */}
    </a>
  );
}
