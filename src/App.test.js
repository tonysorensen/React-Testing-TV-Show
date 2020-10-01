import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { fetchShow } from "./api/fetchShow";

// Initial test to see if component renders
test("App renders", () => {
  render(<App />);
});

// test('App fetches episodes data and rerenders the data', () = {

// })
