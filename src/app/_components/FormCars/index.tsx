"use client";

import React, { useMemo } from "react";
import {
  Autocomplete,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Wrapper } from "@/components";

import * as S from "./styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FipeSchema } from "@/schemas/FipeSchema";

import { useCars } from "@/context/carsContext";
import { useRouter } from "next/navigation";

type OptionProps = {
  label: string;
  code: string;
};

type Props = {
  brands: OptionProps[];
};

type FormData = {
  brand: OptionProps;
  model: OptionProps;
  year: string;
};

export const FormCars = ({ brands }: Props) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(FipeSchema),
  });

  const brandValue = watch("brand");
  const modelValue = watch("model");

  const {
    modelsList,
    yearsList,
    fetchModelsByBrand,
    fetchYearsByModel,
    fetchFipe,
  } = useCars();

  const modelsListMemo = useMemo(() => {
    if (!modelsList.modelos) return [];
    const newArrayModelsList = modelsList.modelos.map((model) => ({
      label: model.nome,
      code: String(model.codigo),
    }));

    return newArrayModelsList;
  }, [modelsList]);

  const yearsListMemo = useMemo(() => {
    const newArrayYearsList = yearsList.map((year) => ({
      label: String(year.nome),
      code: String(year.codigo),
    }));

    return newArrayYearsList;
  }, [yearsList]);

  const handleChangeBrand = (code: string) => {
    fetchModelsByBrand(code);
  };

  const handleChangeModel = (code: string) => {
    fetchYearsByModel({
      brandCode: brandValue?.code,
      modelCode: code,
    });
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      fetchFipe({
        brandCode: data.brand.code,
        modelCode: data.model.code,
        year: data.year,
      });
      router.push("/result");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Wrapper sx={{ backgroundColor: (theme) => theme.bgColor.main }}>
      <form onSubmit={onSubmit} noValidate>
        <S.Container>
          <h1>Tabela Fipe</h1>
          <h2>Consulte o valor de um veículo de forma gratuita</h2>
          <S.Card>
            <CardContent>
              <Controller
                name="brand"
                control={control}
                render={({ field: { ref, onChange, ...field } }) => (
                  <Autocomplete
                    disablePortal
                    onChange={(_, data) => {
                      onChange(data);
                      handleChangeBrand(data?.code!);
                    }}
                    id="combo-box-brand"
                    options={brands}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        {...field}
                        label="Marca"
                        error={!!errors.brand?.message}
                        helperText={errors.brand?.message}
                      />
                    )}
                  />
                )}
              />

              <Controller
                name="model"
                control={control}
                render={({ field: { ref, onChange, ...field } }) => (
                  <Autocomplete
                    disablePortal
                    onChange={(_, data) => {
                      onChange(data);
                      handleChangeModel(data?.code!);
                    }}
                    id="combo-box-models"
                    sx={{ marginTop: "1rem" }}
                    options={modelsListMemo}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        {...field}
                        label="Modelo"
                        error={!!errors.model?.message}
                        helperText={errors.model?.message}
                      />
                    )}
                  />
                )}
              />

              {brandValue && modelValue && (
                <FormControl fullWidth sx={{ marginTop: "1rem" }}>
                  <InputLabel>Ano</InputLabel>
                  <Select {...register("year")} data-testid="year" label="Ano">
                    {yearsListMemo.map((year) => (
                      <MenuItem key={year.code} value={year.code}>
                        {year.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              <S.ButtonCheckPrice
                type="submit"
                variant="contained"
                color="secondary"
                disabled={!isDirty || !isValid}
              >
                Consultar preço
              </S.ButtonCheckPrice>
            </CardContent>
          </S.Card>
        </S.Container>
      </form>
    </Wrapper>
  );
};
