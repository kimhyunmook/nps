import { useEffect } from "react";

export default function Fnc({ fnc }: { fnc: () => void }) {
  useEffect(() => {
    fnc();
  }, [fnc]);
  return <div>fnc</div>;
}
