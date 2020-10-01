import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

// fake data
export const episodeFixture = [
  {
    id: "1234",
    image: "fake pic",
    season: "27",
    number: "42",
    name: "super awesome episode",
    summary: "same as the name",
    runtime: "infinite on loop",
  },
];

// Initial test to see if the component renders. Test will fail if props "episodes" is not provided
test("Episodes component renders", () => {
  render(<Episodes episodes={[]} />);
  //   Failing test:
  //   render(<Episodes />);
});

test("Episodes shows data when rerendered with episodes prop", () => {
  //capture the results of the render the object holds ways for us to query what was rendered. queryAllBy will return an empty array instead of throwing an error
  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

  //Here we expect an empty array since we haven't called for the data yet
  expect(queryAllByTestId("episode")).toStrictEqual([]);
  expect(queryAllByTestId("episode")).toHaveLength(0);
  //   Failing test:
  //   expect(queryAllByTestId("episodes")).toHaveLength(1);

  //use mock data or "fixture" below to pass props to mission so you can test how the component behaves when it receives data
  rerender(<Episodes episodes={episodeFixture} />);

  expect(queryAllByTestId("episode")).toHaveLength(1);
  // Failing test:
  //   expect(queryAllByTestId("episode")).toHaveLength(0);
});

test("Episodes renders an error when there is a problem", () => {
  const errorText = "Whoops! There's a problem!";
  const { getByTestId } = render(<Episodes error={errorText} />);
  expect(getByTestId("episodes-error").innerHTML).toBe(errorText);
});
