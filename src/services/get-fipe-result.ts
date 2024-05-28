import { FipeResult } from "@/intefaces/Fipe";

type Props = {
  brandCode: string;
  modelCode: string;
  year: string;
};

export default async function getFipeResult({
  brandCode,
  modelCode,
  year,
}: Props): Promise<FipeResult | null> {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos/${year}`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  if (response.error) return null;
  return response;
}
