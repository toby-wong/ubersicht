import {defaultTheme2} from "./lib/style";

const command = "bash ubersicht/lib/battery.sh";
const refreshFrequency = 1000; // ms

const renderClass = `
  ${defaultTheme2}
  right: auto;
  bottom: auto;
  margin-left: calc(223ch + 2px);
  font-weight: thin;
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequency, renderClass as className, render };
