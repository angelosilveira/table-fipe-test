import * as yup from "yup";

export const FipeSchema = yup.object({
  brand: yup
    .object({
      label: yup.string().required(),
      code: yup.string().required(),
    })
    .typeError("A marca deve ser selecionada"),
  model: yup
    .object({
      label: yup.string().required(),
      code: yup.string().required(),
    })
    .typeError("O modelo deve ser selecionado"),
  year: yup.string().required("O ano deve ser selecionado"),
});
