import { getIn } from "formik";

// material ui
import MuiTextField from "@material-ui/core/TextField";

export function fieldToTextField({
  disabled,
  field: { onBlur: fieldOnBlur, ...field },
  form: { isSubmitting, touched, errors },
  onBlur,
  helperText,
  ...props
}) {
  const fieldError = getIn(errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;

  return {
    variant: props.variant,
    error: showError,
    helperText: showError ? fieldError : helperText,
    disabled: disabled ?? isSubmitting,
    onBlur:
      onBlur ??
      function (e) {
        fieldOnBlur(e ?? field.name);
      },
    ...field,
    ...props,
  };
}

export default function TextField({ children, ...props }) {
  return (
    <MuiTextField color="primary" {...fieldToTextField(props)}>
      {children}
    </MuiTextField>
  );
}

TextField.displayName = "FormikMaterialUITextField";
