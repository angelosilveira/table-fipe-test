import { createAsyncThunk } from "@reduxjs/toolkit";
import { Model } from "@/intefaces/Model";

import getModelBrandCars from "@/services/get-model-brand-cars";
import getYearBrandCars from "@/services/get-year-brand-cars";
import { Brand } from "@/intefaces/Brand";
import getFipeResult from "@/services/get-fipe-result";
import { FipeResult } from "@/intefaces/Fipe";

type YearsByModelProps = {
  brandCode: string;
  modelCode: string;
};

type FipeProps = {
  year: string;
} & YearsByModelProps;

export const fetchCarsModels = createAsyncThunk<Model[], string>(
  "models/fetchCarsModels",
  async (brandCode: string) => {
    const response = await getModelBrandCars(brandCode);
    return response;
  }
);

export const fetchYearsByModel = createAsyncThunk<Brand[], YearsByModelProps>(
  "models/fetchYearsByModel",
  async ({ brandCode, modelCode }: YearsByModelProps) => {
    const response = await getYearBrandCars({
      brandCode,
      modelCode,
    });
    return response;
  }
);

export const fetchFipe = createAsyncThunk<FipeResult | null, FipeProps>(
  "models/fetchFipe",
  async ({ brandCode, modelCode, year }: FipeProps) => {
    const response = await getFipeResult({
      brandCode,
      modelCode,
      year,
    });
    return response;
  }
);
