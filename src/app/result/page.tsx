"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { Wrapper } from "@/components";
import { RootState } from "@/store/store";

import * as S from "./styles";

export default function Result() {
  const car = useSelector((state: RootState) => state.cars.carFipe);

  return (
    <Wrapper sx={{ backgroundColor: (theme) => theme.bgColor.secondary }}>
      <S.Container>
        {!car ? (
          <>
            <S.Title>
              Você não informou o veículo,{" "}
              <Link href="/">clique aqui para voltar.</Link>
            </S.Title>
          </>
        ) : (
          <>
            <S.Title>Tabela Fipe: Preço {car?.Modelo}</S.Title>
            <S.Price>{car?.Valor}</S.Price>
            <S.Label>Este é o preço de compra do veículo</S.Label>
          </>
        )}
      </S.Container>
    </Wrapper>
  );
}
