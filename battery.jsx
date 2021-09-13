import {defaultTheme2} from "./lib/style";

const command = "bash ubersicht/lib/battery.sh";
const refreshFrequency = 1000; // ms

const renderClass = `
  ${defaultTheme2}
  left: auto;
  bottom: auto;
  font-weight: thin;
  margin-right: calc(15ch - 3px);
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequency, renderClass as className, render };
