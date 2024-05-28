"use client";

import { useSelector } from "react-redux";

import { Wrapper } from "@/components";
import { RootState } from "@/store/store";

import * as S from "./styles";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Result() {
  const car = useSelector((state: RootState) => state.cars.carFipe);

  useEffect(() => {
    if (!car) {
      redirect("/");
    }
  }, [car]);

  return (
    <Wrapper sx={{ backgroundColor: (theme) => theme.bgColor.secondary }}>
      <S.Container>
        <S.Title>Tabela Fipe: Preço {car?.Modelo}</S.Title>
        <S.Price>{car?.Valor}</S.Price>
        <S.Label>Este é o preço de compra do veículo</S.Label>
      </S.Container>
    </Wrapper>
  );
}
