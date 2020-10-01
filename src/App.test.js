import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
// using jest to use mock fetchShow
jest.mock("./api/fetchShow");
console.log("mockFetchShow", mockFetchShow);

// Initial test to see if component renders
test("App renders", () => {
  render(<App />);
});

// test("App fetches episodes data and renders it", async () => {
//   mockFetchShow.mockResolvedValueOnce({ data: episodeFixture });

//   const { getByTestId, queryAllByTestId } = render(<App />);

//   fireEvent.change(getByTestId("select"), { target: { value: 1 } });

//   await wait();
//   expect(queryAllByTestId("episodes")).toHaveLength(1);
// });
