import React from "react";
import { MemoryRouter } from "react-router-dom";
import Edit from "../components/Edit";
import { render } from "@testing-library/react";

test("renders the create form component", () => {
  const wrapper = render(
    <MemoryRouter initialEntries={["/edit/2"]}>
      <Edit />
    </MemoryRouter>
  );
  expect(wrapper).toMatchSnapshot();
});
