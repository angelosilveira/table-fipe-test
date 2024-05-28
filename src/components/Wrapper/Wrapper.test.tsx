// Wrapper.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Wrapper } from "./wrapper";

const customTheme = createTheme({
  bgColor: {
    main: "#fceefd",
  },
});

describe("Wrapper Component", () => {
  test("renders without crashing", () => {
    render(
      <ThemeProvider theme={customTheme}>
        <Wrapper>Test Content</Wrapper>
      </ThemeProvider>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("applies correct CSS properties", () => {
    const { container } = render(
      <ThemeProvider theme={customTheme}>
        <Wrapper>Test Content</Wrapper>
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyleRule("height", "100vh");
    expect(container.firstChild).toHaveStyleRule("display", "flex");
    expect(container.firstChild).toHaveStyleRule("align-items", "center");
    expect(container.firstChild).toHaveStyleRule("justify-content", "center");
  });
});
