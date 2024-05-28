"use client";

import React from "react";
import Link from "next/link";

import { Wrapper } from "@/components";
import { useCars } from "@/context/carsContext";

import * as S from "./styles";

export default function Result() {
  const { carFipe } = useCars();
  console.log("🚀 ~ Result ~ car:", carFipe);

  return (
    <Wrapper sx={{ backgroundColor: (theme) => theme.bgColor.secondary }}>
      <S.Container>
        {!carFipe ? (
          <>
            <S.Title>
              Você não informou o veículo,{" "}
              <Link href="/">clique aqui para voltar.</Link>
            </S.Title>
          </>
        ) : (
          <>
            <S.Title>Tabela Fipe: Preço {carFipe?.Modelo}</S.Title>
            <S.Price>{carFipe?.Valor}</S.Price>
            <S.Label>Este é o preço de compra do veículo</S.Label>
          </>
        )}
      </S.Container>
    </Wrapper>
  );
}
