"use client";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import styles from "./toasterProvider.module.css";

type ToastType = "info" | "warn";
interface ToastProps {
  type: ToastType;
  message: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function Toast({ type, message, onClick }: ToastProps) {
  const isMounted = useIsMounted(100);
  const className = `${styles.Toast} ${styles[type]} ${
    isMounted ? styles.mounted : ""
  }`;

  return (
    <div className={className} onClick={onClick}>
      {message}
    </div>
  );
}
interface ToasterContextProps {
  toaster: (type: ToastType, message: string) => void;
}

const ToasterContext = createContext<ToasterContextProps | undefined>(
  undefined
);

interface Toast {
  id: number;
  type: ToastType;
  message: string;
}
function ToasterProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function addToast(type: ToastType, message: string) {
    const newToast = {
      id: Date.now(),
      type,
      message,
    };

    setToasts((prevToasts: Toast[]) => [...prevToasts, newToast]);
    return newToast;
  }

  function removeToast(id: number) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }

  function toaster(type: ToastType, message: string) {
    const newToast = addToast(type, message);

    setTimeout(() => removeToast(newToast.id), 2000);
  }

  return (
    <ToasterContext.Provider value={{ toaster }}>
      {children}
      <div className={styles.ToastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            message={toast.message}
            onClick={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToasterContext.Provider>
  );
}

export function useToaster() {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error("ToastContext 안에서만 사용할 수 있습니다.");
  }
  const { toaster } = context;
  return toaster;
}

function useIsMounted(delay: number) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return isMounted;
}

export default ToasterProvider;
