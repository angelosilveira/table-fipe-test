import { Brand } from "@/intefaces/Brand";

export default async function getBrandCars(): Promise<Brand[]> {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  if (response.error) return [];
  return response;
}
