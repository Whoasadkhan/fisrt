import { useContext } from "react";
import { themeContext } from "./context/Theme";
import "./styles.css";
export default function App() {
  const { toggle, toggleHandle } = useContext(themeContext);
  return (
    <div className={toggle ? " App dark" : "App"}>
      <h1>Hello brother {toggle ? "good night" : "good moorning "} </h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={toggleHandle}> dark </button>
      <p></p>
    </div>
  );
}
