import App from "../src/App";
import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";

describe("App components", () => {
  test("render App components", () => {
    const { getByText } = render(<App />);
    //screen.debug();
    expect(getByText(/Please sign in/)).toBeInTheDocument();
    expect(getByText(/Sign in/)).toBeInTheDocument();
    fireEvent.click(getByText(/Sign in/));

    expect(getByText(/Welcome/)).toBeInTheDocument();
    expect(getByText(/Sign out/)).toBeInTheDocument();
    fireEvent.click(getByText(/Sign out/));

    //screen.debug();
    expect(getByText(/Please sign in/)).toBeInTheDocument();
  });
});
