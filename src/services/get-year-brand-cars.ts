import { Brand } from "@/intefaces/Brand";

type Props = {
  brandCode: string;
  modelCode: string;
};

export default async function getYearBrandCars({
  brandCode,
  modelCode,
}: Props): Promise<Brand[]> {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  if (response.error) return [];
  return response;
}
