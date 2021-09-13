const font = "SF Mono, Menlo, Monospace";
const fontSize = "11px";
const fontStyle = "regular";
const lineHeight = "24px";
const borderRadius = "8px";

const background1 = "#eccfce";
const background2 = "#2b2d2f";
const foreground1 = "#2b2d2f";
const foreground2 = "#fafafa";
const gap = "2";

const defaultTheme1 = `
  z-index: 100;
  font: ${fontSize} ${font};
  font-style: ${fontStyle};
  color: ${foreground1};
  line-height: ${lineHeight};
  background-color: ${background1};
  foreground-color: ${foreground1};
  opacity: 1;
  display: inline-block;

  padding: 0 2ch;
  margin: ${gap}px;

  position: absolute;
  top: ${gap}px;
  right: ${gap}px;
  bottom: ${gap}px;
  left: ${gap}px;

  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};
  box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.15);
`;

export {
  defaultTheme1
};

const defaultTheme2 = `
  z-index: 100;
  font: ${fontSize} ${font};
  font-style: ${fontStyle};
  color: ${foreground2};
  line-height: ${lineHeight};
  background-color: ${background2};
  foreground-color: ${foreground2};
  opacity: 1;
  display: inline-block;

  padding: 0 2ch;
  margin: ${gap}px;

  position: absolute;
  top: ${gap}px;
  right: ${gap}px;
  bottom: ${gap}px;
  left: ${gap}px;

  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};
  box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.15);
`;

export {
  defaultTheme2
};