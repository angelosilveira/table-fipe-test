// FormCars.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FormCars } from "./";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Wrapper } from "@/components";
import { CarsProvider } from "@/context/carsContext";

const customTheme = createTheme({
  bgColor: {
    main: "#fceefd",
    secondary: "#bdddca",
  },
});

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

const WrapperWithTheme = ({ children }: { children: React.ReactNode }) => (
  <CarsProvider>
    <ThemeProvider theme={customTheme}>
      <Wrapper sx={{ backgroundColor: (theme) => theme.bgColor.main }}>
        {children}
      </Wrapper>
    </ThemeProvider>
  </CarsProvider>
);

const brands = [
  { label: "Toyota", code: "001" },
  { label: "Honda", code: "002" },
];

describe("FormCars Component", () => {
  it("renders without crashing", () => {
    render(
      <WrapperWithTheme>
        <FormCars brands={brands} />
      </WrapperWithTheme>
    );
    expect(
      screen.getByRole("heading", { name: /Tabela Fipe/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Consulte o valor de um veículo de forma gratuita")
    ).toBeInTheDocument();
  });

  it("renders brand autocomplete", () => {
    render(
      <WrapperWithTheme>
        <FormCars brands={brands} />
      </WrapperWithTheme>
    );
    const brandInput = screen.getByLabelText("Marca");
    expect(brandInput).toBeInTheDocument();
  });

  it("renders model autocomplete", () => {
    render(
      <WrapperWithTheme>
        <FormCars brands={brands} />
      </WrapperWithTheme>
    );
    const modelInput = screen.getByLabelText("Modelo");
    expect(modelInput).toBeInTheDocument();
  });

  it("does not render year select initially", () => {
    render(
      <WrapperWithTheme>
        <FormCars brands={brands} />
      </WrapperWithTheme>
    );

    const yearSelect = screen.queryByLabelText("Ano");
    expect(yearSelect).not.toBeInTheDocument();
  });

  it("renders disabled checking price button", () => {
    render(
      <WrapperWithTheme>
        <FormCars brands={brands} />
      </WrapperWithTheme>
    );
    const button = screen.getByText("Consultar preço");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("check click input brand autocomplete", async () => {
    render(
      <WrapperWithTheme>
        <FormCars brands={brands} />
      </WrapperWithTheme>
    );

    const autocompleteInput = screen.getByRole("combobox", { name: /marca/i });

    fireEvent.change(autocompleteInput, { target: { value: "Toyota" } });

    const button = screen.getByText("Consultar preço");

    expect(screen.getByText("Toyota")).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
