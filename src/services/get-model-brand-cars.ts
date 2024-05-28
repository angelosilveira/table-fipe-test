import { Model } from "@/intefaces/Model";

export default async function getModelBrandCars(
  brandCode: string
): Promise<Model[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/marcas/${brandCode}/modelos`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  if (response.error) return [];
  return response;
}
