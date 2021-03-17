// material ui
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

// components
import CustomerList from "./CustomerList";
import Titlebar from "components/core/Titlebar";

// hooks
import { useHistory } from "react-router-dom";

const Customers = () => {
  const history = useHistory();

  const actions = (
    <Button
      color="primary"
      onClick={() => history.push("/customer/add")}
      variant="contained"
    >
      Add Customer
    </Button>
  );

  return (
    <Container maxWidth="xl">
      <Titlebar actions={actions} title="Customers" />
      <Box paddingBottom="20px">
        <Paper>
          <CustomerList />
        </Paper>
      </Box>
    </Container>
  );
};

export default Customers;
