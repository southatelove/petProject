declare module "*css" {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

// для того чтобы TS мог спокойно импортировать svg,png...
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
