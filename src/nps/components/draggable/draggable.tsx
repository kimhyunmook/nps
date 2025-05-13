import { RefObject } from "react";
import Draggable from "react-draggable";
import { useRef } from "react";
import { PropsC2 } from "../../types/npsType";
import s from "../../styles/components/draggable.module.css";

export default function Draggalbe({ children, className }: PropsC2) {
  const nodeRef = useRef<HTMLElement | HTMLDivElement>(null);
  return (
    <div className={s.drag}>
      <Draggable nodeRef={nodeRef as RefObject<HTMLElement>}>
        <div ref={nodeRef as RefObject<HTMLDivElement>} style={{}}>
          {children}
        </div>
      </Draggable>
    </div>
  );
}
