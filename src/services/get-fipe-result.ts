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
    `${process.env.NEXT_PUBLIC_API_URL}/marcas/${brandCode}/modelos/${modelCode}/anos/${year}`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

  if (response.error) return null;
  return response;
}
