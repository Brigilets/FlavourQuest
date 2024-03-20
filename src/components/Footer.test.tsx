import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders footer text", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toBeDefined();
    const textElement = screen.getByText(/FlavourQuest by/i);
    expect(textElement).toBeInTheDocument();
  });
});
