import * as Yup from 'yup';

export const createCustomerSchema = Yup.object().shape({
  name_first: Yup.string().required(),
  name_last: Yup.string().required(),
  email: Yup.string().email().required(),
  address: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  postal_code: Yup.string().required(),
  phone: Yup.string()
    .trim()
    .matches(/^\d{10,11}$/, {
      message: 'Phone should be 10 or 11 digits',
    })
    .nullable(),
});
