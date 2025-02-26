declare module "*.module.css" {
  const cssClasses: { [key: string]: string };
  export default cssClasses;
}

declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
