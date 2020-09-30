import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { fetchShow } from "./api/fetchShow";

test("App renders", () => {
  render(<App />);
});
