import { createRoot } from "react-dom/client";

import App from "./App";
import { Theme } from "./context/Theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Theme>
    <App />
  </Theme>
);
