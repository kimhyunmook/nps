"use client";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import NpsModal from "./npsModal";
import type {
  NextPropsShared,
  NextPropsSharedLayout,
  ComponenetValue,
} from "./types/npsType";
import { getDisplayName } from "next/dist/shared/lib/utils";
import npsl from "./styles/npsLayout.module.css";
import ToasterProvider from "./components/toaster/toasterProvider";

const NextPropsSharedContext = createContext<NextPropsShared>({
  setIsOpen: () => {},
  setComponent: () => {},
});

export default function NpsProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState<ComponenetValue>({});
  console.log(children);
  return (
    <NextPropsSharedContext.Provider value={{ setIsOpen, setComponent }}>
      <ToasterProvider>
        <div className={npsl.page}>{children}</div>
        <NpsModal isOpen={isOpen} setIsOpen={setIsOpen} component={component} />
      </ToasterProvider>
    </NextPropsSharedContext.Provider>
  );
}

export function Nps({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState<ComponenetValue>({});

  return (
    <NextPropsSharedContext.Provider value={{ setIsOpen, setComponent }}>
      <ToasterProvider>
        <div className={npsl.page}>{children}</div>
        <NpsModal isOpen={isOpen} setIsOpen={setIsOpen} component={component} />
      </ToasterProvider>
    </NextPropsSharedContext.Provider>
  );
}

export function NpsLayout({ children, title, width }: NextPropsSharedLayout) {
  const { setIsOpen, setComponent } = useNps();
  return (
    <div className={npsl.layout} style={{ width }}>
      <h2 className={npsl.title}>{title}</h2>
      <ul className={npsl.list}>
        {React.Children.map(children, (child, index) => {
          return (
            <li
              className={npsl.li}
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
                if (!React.isValidElement(child)) return;

                const cloneProps = Object.fromEntries(
                  Object.entries(child.props ?? {}).map((v) => {
                    const key = v[0];
                    const value = v[1];
                    return [key, value];
                  })
                );
                const clone = React.cloneElement(child, cloneProps);

                setComponent({
                  element: clone,
                  displayName:
                    typeof child.type === "string"
                      ? child.type
                      : getDisplayName(child.type),
                  name: typeof child.type === "function" ? child.type.name : "",
                  props: child.props,
                });
              }}
            >
              {child}
              <div className={npsl.cover}></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function useNps() {
  const context = useContext<NextPropsShared>(NextPropsSharedContext);
  if (!context) throw new Error("NpsProvider 안에서 사용하세요");
  return context;
}
