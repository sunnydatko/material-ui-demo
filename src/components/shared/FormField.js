import { Field } from 'formik';

// components
import TextField from './TextField';

const FormField = ({ helperText = ' ', ...props }) => {
  return (
    <Field
      component={TextField}
      fullWidth
      helperText={helperText}
      variant="outlined"
      {...props}
    />
  );
};

export default FormField;
