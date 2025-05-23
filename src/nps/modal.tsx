import React, { useEffect, useState } from "react";
import npsm from "./styles/npsModal.module.css";
import DisplayName from "./components/modal/displayName";
import { NextPropsSharedModalProps } from "./types/npsType";
import CodeBtn from "./components/modal/codeBtn";
import Draggalbe from "./components/draggable/draggable";

export default function NpsModal({
  isOpen,
  setIsOpen,
  component,
}: NextPropsSharedModalProps) {
  const [keyMaxLength, setKML] = useState(0);
  const [display, setDisplay] = useState("");
  function close(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setIsOpen(false);
  }
  useEffect(() => {
    setKML(0);
  }, [component]);

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
  if (React.isValidElement(component.element))
    component.element = React.cloneElement(component.element, np);

  const propsValue = Object.entries(component?.props ?? {});
  const cpName = component.name + " (Component)";
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setDisplay(npsm.display);
      }, 100);
    } else {
      setDisplay("");
    }
  }, [isOpen]);

  return (
    <Draggalbe>
      {isOpen && (
        <div className={`${npsm.information} ${isOpen && display}`}>
          <div className={npsm.top}>
            <h2 className={npsm.name}>
              {!!component.name ? cpName : "Element"}
            </h2>
            <a className={npsm.closeBtn} onClick={close}></a>
          </div>
          <DisplayName component={component} />
          <div className={npsm.elements}>{component.element}</div>
          {component.vscUrl ? <CodeBtn url={component.vscUrl} /> : null}
          <div className={npsm.lists}>
            <h2 className={npsm.title}>Props</h2>
            <ul>
              {propsValue.length > 0 ? (
                propsValue.map((v, index) => {
                  let value = typeof v[1] as React.ReactNode;
                  if (v[1] === null) value = "null";
                  switch (value) {
                    case "function":
                      value = "function";

                      const fncType = v[1].toString().split(`FncType)("`)[1];
                      if (fncType) value = `() => ${fncType.split(`")`)[0]}`;
                      break;

                    case "object":
                      // 배열인 경우
                      if (Array.isArray(v[1])) {
                        const overlap = v[1].map((v) => typeof v);
                        const setOverlap = new Set(overlap);
                        const arr = [...setOverlap];

                        value = arr.reduce((a, c, i) => {
                          a += c;
                          if (i !== arr.length - 1) a += "|";
                          else a += "[ ]";
                          return a;
                        }, "");
                      } else {
                        // 객체인 경우
                        const arr = Object.entries(v[1]);

                        const reactChk = arr[0].find((x) => x === "$$typeof");
                        if (!!reactChk) {
                          value = "React.ReactNode";
                          return (
                            <li className={""} key={index}>
                              <h3 className={npsm.key}>{v[0]}</h3>
                              <p className={npsm.value}>{value}</p>
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
                  const key = v[0];
                  if (key.length > keyMaxLength) setKML(key.length);

                  return (
                    <li key={index}>
                      <h3
                        className={npsm.key}
                        style={{ width: `${keyMaxLength - 1}ch` }}
                      >
                        {key}
                      </h3>
                      <p className={npsm.value}>{value}</p>
                    </li>
                  );
                })
              ) : (
                <li className={npsm.noProps}>
                  <p>Props가 없어요</p>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </Draggalbe>
  );
}
