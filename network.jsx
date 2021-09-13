import { defaultTheme2 } from "./lib/style";

const command = "bash ubersicht/lib/network.sh";
const refreshFrequency = 5000; // ms

const renderClass = `
  ${defaultTheme2}
  right: auto;
  bottom: auto;
  margin-left: calc(7ch + 2px);
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequency, renderClass as className, render };
