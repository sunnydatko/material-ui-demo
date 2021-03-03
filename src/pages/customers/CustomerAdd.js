import { Formik, Form } from "formik";

// hooks
import { useHistory } from "react-router-dom";
import { useState } from "react";

// material ui
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Snackbar,
} from "@material-ui/core";

// validation
import { createCustomerSchema } from "../../validation/customer";

// components
import Alert from "../../components/shared/Alert";
import FormField from "../../components/shared/FormField";

const initialValues = {
  address: "",
  city: "",
  email: "",
  first_name: "",
  last_name: "",
  phone: "",
  postalcode: "",
  state: "",
};

const CustomerAdd = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(true);
    setTimeout(() => {
      history.push("/customers");
    }, 1000);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Add Customer</Typography>
      <Card>
        <CardContent>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
            // validateOnMount
            validationSchema={createCustomerSchema}
          >
            {({ isSubmitting }) => (
              <Form id="form-customer">
                <Grid container spacing={3}>
                  <Grid item md={6} sm={12}>
                    <FormField label="First Name" name="name_first" required />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <FormField label="Last Name" name="name_last" required />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <FormField label="Email" name="email" required />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <FormField label="Phone" name="phone" required />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <FormField label="Address" name="address" required />
                  </Grid>
                  <Grid item lg={2} md={6} sm={12}>
                    <FormField label="City" name="city" required />
                  </Grid>
                  <Grid item lg={2} md={6} sm={12}>
                    <FormField label="State" name="state" required />
                  </Grid>
                  <Grid item lg={2} md={6} sm={12}>
                    <FormField label="Zip Code" name="postal_code" required />
                  </Grid>
                  <Grid container item justify="flex-end" spacing={2}>
                    <Grid item>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        onClick={() => history.push("/customers")}
                        variant="outlined"
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
      <Snackbar
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        open={open}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Customer created
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CustomerAdd;
