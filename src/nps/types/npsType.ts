import { PropsWithChildren } from "react";

export interface PropsC2 extends PropsWithChildren {
  className?: string;
}

export interface NextPropsShared {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setComponent: React.Dispatch<React.SetStateAction<object>>;
}

export interface NextPropsSharedLayout extends PropsC2 {
  title: string;
  width?: number | string;
}

export type ComponenetValue = {
  name?: string;
  props?: object;
  element?: React.ReactNode;
  displayName?: string;
};

export interface NextPropsSharedModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  component: ComponenetValue;
}
