import { useHistory } from "react-router-dom";

// material ui
import { Box, Container, Paper } from "@material-ui/core";

// components
import PaymentList from "./PaymentList";
import Titlebar from "components/core/Titlebar";

const Payments = () => {
  const history = useHistory();

  const handleRowClick = (invoice) => {
    history.push(`/invoice/${invoice.invoice_number}`);
  };

  const actions = <></>;

  return (
    <Container maxWidth="xl">
      <Titlebar actions={actions} title="Payments" />
      <Box paddingBottom="20px">
        <Paper>
          <PaymentList handleRowClick={handleRowClick} isLatest={false} />
        </Paper>
      </Box>
    </Container>
  );
};

export default Payments;
