import { FormCars } from "@/app/_components/FormCars";
import getBrandCars from "@/services/get-brand-cars";
import { Suspense } from "react";

export default async function Home() {
  const brands = await getBrandCars();

  const newArrayBrands = brands.map((brand) => {
    return {
      label: brand.nome,
      code: brand.codigo,
    };
  });

  return <FormCars brands={newArrayBrands} />;
}
