import { Model } from "@/intefaces/Model";
import { createSlice } from "@reduxjs/toolkit";
import {
  addfetchCarsModelsExtraReducers,
  addfetchFipeExtraReducers,
  addfetchYearsByModelsExtraReducers,
} from "./extraReducers";
import { FipeResult } from "@/intefaces/Fipe";

type FormData = {
  codigo: string;
  nome: string;
};

type Request = {
  status: string;
  error: string | null;
};

export type CarsState = Request & {
  modelsList: Model;
  years: FormData[];
  carFipe: FipeResult | null;
};

const initialState: CarsState = {
  modelsList: {
    modelos: [],
    anos: [],
  },
  years: [],
  carFipe: null,
  status: "idle",
  error: null,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    addfetchCarsModelsExtraReducers(builder);
    addfetchYearsByModelsExtraReducers(builder);
    addfetchFipeExtraReducers(builder);
  },
});

export default carsSlice.reducer;
