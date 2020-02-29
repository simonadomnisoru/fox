import React from "react";
import { MemoryRouter } from "react-router-dom";
import Posts from "../components/Posts";
import { render } from "@testing-library/react";

describe("Posts", () => {
  it("renders the posts component", () => {
    const wrapper = render(
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
