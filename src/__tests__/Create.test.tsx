import React from "react";
import { MemoryRouter } from "react-router-dom";
import Create from "../components/Create";
import { render } from "@testing-library/react";

describe("Create", () => {
  it("renders the create form component", () => {
    const wrapper = render(
      <MemoryRouter initialEntries={["/edit/2"]}>
        <Create />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
