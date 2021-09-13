import { defaultTheme1 } from "./lib/style";

const command = 'date +"%I:%M %p"';
const refreshFrequency = 60000; // ms

const renderClass = `
  ${defaultTheme1}
  left: auto;
  bottom: auto;
  font-weight: thin;
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequency, renderClass as className, render };
