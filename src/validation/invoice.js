import * as Yup from "yup";

export const createInvoiceSchema = Yup.object().shape({
  customer: Yup.string().required(),
  amount: Yup.string().required(),
});
