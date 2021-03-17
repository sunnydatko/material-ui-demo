import { useHistory } from "react-router-dom";

// material ui
import {
  Box,
  Button,
  Container,
  Paper,
} from "@material-ui/core";

// components
import InvoiceList from "./InvoiceList";
import Titlebar from "components/core/Titlebar";

const Invoices = () => {
  const history = useHistory();

  const handleRowClick = (invoice) => {
    history.push(`/invoice/${invoice.invoice_number}`);
  };

  const actions = (
    <Button
      color="primary"
      onClick={() => history.push("/invoice/add")}
      variant="contained"
    >
      Add Invoice
    </Button>
  );

  return (
    <Container maxWidth="xl">
      <Titlebar actions={actions} title="Invoices" />
      <Box paddingBottom="20px">
        <Paper>
          <InvoiceList handleRowClick={handleRowClick} isLatest={false} />
        </Paper>
      </Box>
    </Container>
  );
};

export default Invoices;
