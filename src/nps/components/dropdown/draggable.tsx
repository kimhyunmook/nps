import { PropsWithChildren } from "react";
import Draggable from "react-draggable";
export default function Draggalbe({ children }: PropsWithChildren) {
  return (
    <Draggable>
      <div
        style={{
          width: 100,
          height: 100,
          background: "lightblue",
          cursor: "move",
        }}
      >
        {children}
      </div>
    </Draggable>
  );
}
