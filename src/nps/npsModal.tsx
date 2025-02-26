"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import npsm from "./styles/npsModal.module.css";
import DisplayName from "./components/displayName/displayName";

export type ComponenetValue = {
  name?: string;
  props?: object;
  element?: React.ReactNode;
  displayName?: string;
};
type CrystalModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  component: ComponenetValue;
};
export default function NpsModal({
  isOpen,
  setIsOpen,
  component,
}: CrystalModalProps) {
  function close(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setIsOpen(false);
  }

  const np =
    component.element && React.isValidElement(component.element)
      ? Object.fromEntries(
          Object.entries(
            component?.element?.props as { [key: string]: any }
          ).map((v) => {
            const key = v[0];
            const value = v[1];
            if (key === "value") return [key, undefined];
            return [key, value];
          })
        )
      : {};
  if (React.isValidElement(component.element)) {
    component.element = React.cloneElement(component.element, np);
  }

  return (
    <div className={`${npsm.infomation} ${isOpen && npsm.display}`}>
      <div className={npsm.top}>
        <h2 className={npsm.name}>{component.name || "Document"}</h2>
        <a className={npsm.closeBtn} onClick={close}></a>
      </div>
      <DisplayName component={component} />
      <div className={npsm.elements}>{component.element}</div>
      <div className={npsm.lists}>
        {!!component?.props && <h2 className={npsm.title}>Props</h2>}
        <ul>
          {Object.entries(component?.props ?? {}).map((v, index) => {
            let value = typeof v[1] as React.ReactNode;

            if (v[1] === null) value = "null";

            switch (value) {
              case "function":
                value = "void";
                break;

              case "object":
                if (Array.isArray(v[1])) {
                  const overlap = v[1].map((v) => {
                    return typeof v[1];
                  });
                  const setOverlap = new Set(overlap);
                  const arr = [...setOverlap];
                  value = arr.reduce((a, c, i) => {
                    a += c;
                    if (i !== arr.length - 1) a += "|";
                    else a += "[ ]";
                    return a;
                  }, "");
                } else {
                  const arr = Object.entries(v[1]);

                  const reactChk = arr[0].find((x) => x === "$$typeof");
                  if (!!reactChk) {
                    value = "React.ReactNode";
                    return (
                      <li className={""} key={index}>
                        <span className={npsm.key}>{v[0]}</span>
                        <span className={npsm.value}>{value}</span>
                      </li>
                    );
                  }
                  value = arr.map((v2, i) => {
                    return (
                      <span key={v2[0]} className={npsm.ob}>
                        {i === 0 && "{"}
                        <span className={npsm.key}>{v2[0]}</span>
                        <span className={npsm.value}>{typeof v2[1]}</span>
                        {i === arr.length - 1 && " }"}
                      </span>
                    );
                  });
                }
                break;
            }
            return (
              <li key={index}>
                <h3 className={npsm.key}>{v[0]}</h3>
                <p className={npsm.value}>{value}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
