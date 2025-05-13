import { CSSProperties, RefObject } from "react";
import Draggable from "react-draggable";
import { useRef } from "react";
import { PropsC2 } from "../../types/npsType";

export default function Draggalbe({
  children,
  className,
  style,
}: PropsC2 & { style: CSSProperties }) {
  const nodeRef = useRef<HTMLElement | HTMLDivElement>(null);
  return (
    <div
      style={{
        position: "fixed",
        top: "auto",
        bottom: "-100%",
        left: "50%",
        width: "100%",
        transform: "translateX(-50%)",
        maxWidth: "450px",
        transition: "0.5s",
        ...style,
      }}
    >
      <Draggable nodeRef={nodeRef as RefObject<HTMLElement>}>
        <div ref={nodeRef as RefObject<HTMLDivElement>} style={{}}>
          {children}
        </div>
      </Draggable>
    </div>
  );
}
