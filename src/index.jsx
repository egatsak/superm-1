import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
/* const root = createRoot(document.getElementById("root"));
root.render(<App />); */
