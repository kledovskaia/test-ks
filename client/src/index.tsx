import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Loader from "./components/Loader/Loader";
import { DataContextProvider } from "./context/dataContext";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Router>
    <DataContextProvider>
      <App />
      <Loader />
    </DataContextProvider>
  </Router>
);
