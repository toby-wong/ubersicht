import { defaultTheme1 } from "./lib/style";

const command = "bash ubersicht/lib/spotify_track.sh";
const refreshFrequency = 5000; // ms

const renderClass = `
  ${defaultTheme1}
  left: auto;
  bottom: auto;
  font-weight: thin;
  margin-right: calc(26ch - 2px);
`;

const render = ({ output }) => {
  if (!output) return null;

  let spotify = `${output}`;
  if (spotify.length > 34) spotify = `${spotify.slice(0, 30)} ...`;

  return <div>{`${spotify}`}</div>;
};

export { command, refreshFrequency, renderClass as className, render };