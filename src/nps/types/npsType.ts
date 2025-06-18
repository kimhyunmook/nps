import { CSSProperties, PropsWithChildren } from "react";

export interface PropsC2 extends PropsWithChildren {
  className?: string;
}

export interface NextPropsShared {
  clickAble: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setComponent: React.Dispatch<React.SetStateAction<object>>;
}

export interface NextPropsSharedLayout extends PropsC2 {
  title: string;
  width?: number | string;
  borderColor?: CSSProperties["borderColor"];
  clickAble?: boolean;
}

export type ComponenetValue = {
  name?: string;
  props?: object;
  element?: React.ReactNode;
  displayName?: string;
  vscUrl?: string;
};

export interface NextPropsSharedModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  component: ComponenetValue;
}

export interface UiProviderType extends PropsWithChildren {
  className?: string;
  clickAble?: boolean;
}
