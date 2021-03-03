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
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  Select,
  Snackbar,
} from "@material-ui/core";

// validation
import { createInvoiceSchema } from "../../validation/invoice";

// components
import Alert from "../../components/shared/Alert";
import FormField from "../../components/shared/FormField";

const initialValues = {
  amount: "",
  customer: "",
  issue_date: "",
  status: "",
};

const InvoiceAdd = () => {
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
      history.push("/invoices");
    }, 1000);
  };

  const getDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
    var yyyy = today.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Add Invoice</Typography>
      <Card>
        <CardContent>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
            // validateOnMount
            validationSchema={createInvoiceSchema}
          >
            {({ isSubmitting }) => (
              <Form id="form-customer">
                <Grid container spacing={3}>
                  <Grid item md={6} sm={12}>
                    <FormField label="Customer" name="customer" required />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <FormField label="Amount Due" name="amount" required />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="select-outlined-label">Status</InputLabel>
                      <Select
                        labelId="select-outlined-label"
                        id="select-outlined"
                        // value={age}
                        //  onChange={handleChange}
                        label="Status"
                      >
                        <MenuItem value={10}>Canceled</MenuItem>
                        <MenuItem value={10}>Completed</MenuItem>
                        <MenuItem value={10}>Pending</MenuItem>
                        <MenuItem value={20}>Paid</MenuItem>
                        <MenuItem value={30}>Rejected</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <TextField
                      defaultValue={getDate()}
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        required: true,
                      }}
                      label="Date of Issue"
                      name="issue_date"
                      type="date"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid container item justify="flex-end" spacing={2}>
                    <Grid item>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        onClick={() => history.push("/invoices")}
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
          Invoice created.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default InvoiceAdd;
