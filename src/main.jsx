import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Reducer } from "./ReducerUseContext.jsx/Reducer.jsx";
import Nk from "./ReducerUseContext.jsx/Nk.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nk />
  </StrictMode>
);
