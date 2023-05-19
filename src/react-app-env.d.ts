/// <reference types="react-scripts" />

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
