import { Model } from "@/intefaces/Model";
import { FipeResult } from "@/intefaces/Fipe";
import React, { createContext, useContext, useState, ReactNode } from "react";
import getModelBrandCars from "@/services/get-model-brand-cars";
import getYearBrandCars from "@/services/get-year-brand-cars";
import getFipeResult from "@/services/get-fipe-result";

type FormData = {
  codigo: string;
  nome: string;
};

type FormDataModel = {
  brandCode: string;
  modelCode: string;
};

type FormDataYear = FormDataModel & {
  year: string;
};

type CarsContextType = {
  modelsList: Model;
  yearsList: FormData[];
  carFipe: FipeResult | null;
  fetchModelsByBrand: (brandCode: string) => Promise<void>;
  fetchYearsByModel: ({ brandCode, modelCode }: FormDataModel) => Promise<void>;
  fetchFipe: ({ brandCode, modelCode, year }: FormDataYear) => Promise<void>;
};

const CarsContext = createContext<CarsContextType | undefined>(undefined);

type CarsProviderProps = {
  children: ReactNode;
};

export const CarsProvider = ({ children }: CarsProviderProps) => {
  const [modelsList, setModelsList] = useState<Model>({
    modelos: [],
    anos: [],
  });
  const [yearsList, setYears] = useState<FormData[]>([]);
  const [carFipe, setCarFipe] = useState<FipeResult | null>(null);

  const fetchModelsByBrand = async (brandCode: string) => {
    try {
      const response = await getModelBrandCars(brandCode);
      setModelsList(response);
    } catch (error) {
      console.error("Erro ao buscar lista de modelos:", error);
    }
  };

  const fetchYearsByModel = async ({ brandCode, modelCode }: FormDataModel) => {
    try {
      const response = await getYearBrandCars({
        brandCode,
        modelCode,
      });

      setYears(response);
    } catch (error) {
      console.error("Erro ao buscar lista de modelos:", error);
    }
  };

  const fetchFipe = async ({ brandCode, modelCode, year }: FormDataYear) => {
    try {
      const response = await getFipeResult({
        brandCode,
        modelCode,
        year,
      });
      setCarFipe(response);
    } catch (error) {
      console.error("Erro ao buscar lista de modelos:", error);
    }
  };

  return (
    <CarsContext.Provider
      value={{
        modelsList,
        yearsList,
        carFipe,
        fetchModelsByBrand,
        fetchYearsByModel,
        fetchFipe,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export const useCars = (): CarsContextType => {
  const context = useContext(CarsContext);
  if (!context) {
    throw new Error("useCars deve ser usado dentro de um CarsProvider");
  }
  return context;
};
