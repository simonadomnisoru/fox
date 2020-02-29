import React from "react";
import { MemoryRouter } from "react-router-dom";
import FormPost from "../components/FormPost";
import { render } from "@testing-library/react";

describe("FormPost", () => {
  it("renders the form post without values and submit disabled", () => {
    const mockProps = {
      post: {},
      disabled: true,
      onChange: () => jest.fn(),
      onSubmit: () => jest.fn()
    };
    const wrapper = render(
      <MemoryRouter>
        <FormPost {...mockProps} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the form post with values", () => {
    const mockProps = {
      post: {
        title: "title",
        content: "content",
        long: "long",
        lat: "lat",
        image_url: "image_url"
      },
      disabled: false,
      onChange: () => jest.fn(),
      onSubmit: () => jest.fn()
    };
    const wrapper = render(
      <MemoryRouter>
        <FormPost {...mockProps} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
