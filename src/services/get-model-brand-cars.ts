import { Model } from "@/intefaces/Model";

export default async function getModelBrandCars(
  brandCode: string
): Promise<Model[]> {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  if (response.error) return [];
  return response;
}
