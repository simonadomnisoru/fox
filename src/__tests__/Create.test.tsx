import React from "react";
import { MemoryRouter } from "react-router-dom";
import Create from "../components/Create";
import { render } from "@testing-library/react";

test("renders the create form component", () => {
  const wrapper = render(
    <MemoryRouter>
      <Create />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();
});
