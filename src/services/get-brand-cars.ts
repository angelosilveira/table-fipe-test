import { Brand } from "@/intefaces/Brand";

export default async function getBrandCars(): Promise<Brand[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/marcas`)
    .then((response) => response.json())
    .catch((error) => console.log(error));

  if (response.error) return [];
  return response;
}
