import { defaultTheme1 } from "./lib/style";

const command = "bash ubersicht/lib/workspace.sh";
const refreshFrequency = 1000; // ms

const renderClass = `
  ${defaultTheme1}
  right: auto;
  bottom: auto;
  font-weight: thin;
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequency, renderClass as className, render };
