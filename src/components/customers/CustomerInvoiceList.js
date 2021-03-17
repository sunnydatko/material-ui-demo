// hooks
import { useMemo } from "react";
import { useHistory } from "react-router-dom";

// material ui
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";

// components
import Table from "components/core/Table";
import Status from "components/core/Status";

// data
import INVOICE_DATA from "helpers/invoiceData.json";

const COLUMNS = [
  {
    Header: "ID",
    accessor: "invoice_number",
  },
  {
    Header: "Date of Issue",
    accessor: "date_processed",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => {
      return <Status value={value}>{value}</Status>;
    },
  },
  {
    Header: "Total",
    accessor: "amount",
    disableFilters: true,
    Cell: ({ value }) => {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
];

const CustomerInvoiceList = ({ customer }) => {
  const customerInvoices = INVOICE_DATA.filter(
    (invoice) => invoice.customer_id === customer.customer_id
  );

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => customerInvoices, [customerInvoices]);
  const history = useHistory();

  const handleRowClick = (invoice) => {
    history.push(`/invoice/${invoice.invoice_number}`);
  };

  return (
    <>
      <Card>
        <CardHeader subheader="Customer Invoices" />
        <CardContent>
          {customerInvoices.length ? (
            <Table
              columns={columns}
              data={data}
              handleRowClick={handleRowClick}
            />
          ) : (
            <Typography>No invoices found for this customer.</Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default CustomerInvoiceList;
