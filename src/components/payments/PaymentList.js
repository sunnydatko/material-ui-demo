// hooks
import { useMemo } from 'react';
// import { useHistory } from "react-router-dom";
import { merge } from 'lodash';

// components
import Table from 'components/core/Table';
import CustomerIcon from 'components/customers/CustomerIcon';

// data
import CUSTOMER_DATA from 'helpers/customerData.json';
import PAYMENT_DATA from 'helpers/paymentData.json';

const COLUMNS = [
  {
    Header: 'Date Received',
    accessor: 'date',
  },
  {
    Header: 'Customer',
    Cell: (props) => {
      const { original } = props.row;
      console.log(original);
      return <CustomerIcon value={original} />;
    },
  },

  {
    Header: 'Payment Mode',
    accessor: 'payment_mode',
    Cell: ({ value }) => {
      return value;
    },
  },
  {
    Header: 'Amount',
    accessor: 'amount',
    disableFilters: true,
    Cell: ({ value }) => {
      return '$' + parseInt(value).toFixed(2).toLocaleString();
    },
  },
];

const InvoiceList = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => {
    let mappedPayments = [];

    PAYMENT_DATA.forEach((payment) => {
      const customer = CUSTOMER_DATA.filter(
        (customer) => customer.customer_id === payment.customer_id
      )[0];

      mappedPayments.push(merge(payment, customer));
    });

    return mappedPayments;
  }, []);

  // const history = useHistory();

  const handleRowClick = (invoice) => {
    // history.push(`/invoice/${invoice.invoice_number}`);
  };

  return (
    <Table columns={columns} data={data} handleRowClick={handleRowClick} />
  );
};

export default InvoiceList;
