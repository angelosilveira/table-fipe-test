import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { fetchCarsModels, fetchYearsByModel, fetchFipe } from "./thunks";
import { CarsState } from "./carsSlice";

export const addfetchCarsModelsExtraReducers = (
  builder: ActionReducerMapBuilder<CarsState>
) => {
  builder
    .addCase(fetchCarsModels.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchCarsModels.fulfilled, (state, action: PayloadAction<any>) => {
      state.status = "succeeded";
      state.modelsList = action.payload;
    })
    .addCase(fetchCarsModels.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Failed to fetch models";
    });
};

export const addfetchYearsByModelsExtraReducers = (
  builder: ActionReducerMapBuilder<CarsState>
) => {
  builder
    .addCase(fetchYearsByModel.pending, (state) => {
      state.status = "loading";
    })
    .addCase(
      fetchYearsByModel.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.years = action.payload;
      }
    )
    .addCase(fetchYearsByModel.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Failed to fetch models";
    });
};

export const addfetchFipeExtraReducers = (
  builder: ActionReducerMapBuilder<CarsState>
) => {
  builder
    .addCase(fetchFipe.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchFipe.fulfilled, (state, action: PayloadAction<any>) => {
      state.status = "succeeded";
      state.carFipe = action.payload;
    })
    .addCase(fetchFipe.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message || "Failed to fetch models";
    });
};
