import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  description: yup.string().required(),
  artist_id: yup.string().nullable(),
  admin_id: yup.string().nullable(),
});
