// hooks
import { useMemo } from "react";
import { useHistory } from "react-router-dom";

// components
import CustomerIcon from "./CustomerIcon";
import Table from "components/core/Table";

// data
import CUSTOMER_DATA from "helpers/customerData.json";
import INVOICE_DATA from "helpers/invoiceData.json";

const COLUMNS = [
  {
    Header: "Name",
    accessor: "first_name",
    Cell: (props) => {
      const { original } = props.row;
      return <CustomerIcon value={original} />;
    },
  },
  {
    Header: "Location",
    accessor: "state",
    Cell: (props) => {
      const { original } = props.row;
      return original.city + ", " + original.state;
    },
  },
  {
    Header: "Orders",
    Cell: (props) => {
      const invoices = INVOICE_DATA.filter(
        (data) => data.customer_id === props.row.original.customer_id
      );
      return invoices.length;
    },
  },
  {
    Header: "Spent",
    Cell: (props) => {
      let total = 0;
      const invoices = INVOICE_DATA.filter(
        (data) => data.customer_id === props.row.original.customer_id
      );
      invoices.forEach((invoice) => (total += parseInt(invoice.amount)));

      return '$' + total.toFixed(2).toLocaleString();
    },
  },
];

const CustomerList = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => CUSTOMER_DATA, []);

  const history = useHistory();

  const handleRowClick = (customer) => {
    history.push(`/customer/${customer.customer_id}`);
  };

  return (
    <Table columns={columns} data={data} handleRowClick={handleRowClick} />
  );
};

export default CustomerList;
