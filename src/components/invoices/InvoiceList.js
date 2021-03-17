// hooks
import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { merge } from 'lodash';

// components
import Table from 'components/core/Table';
import Status from 'components/core/Status';

// data
import CUSTOMER_DATA from 'helpers/customerData.json';
import INVOICE_DATA from 'helpers/invoiceData.json';

const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'invoice_number',
  },
  {
    Header: 'Customer',
    Cell: (props) => {
      const { original } = props.row;
      return original.first_name + ', ' + original.last_name;
    },
  },
  {
    Header: 'Date of Issue',
    accessor: 'date_processed',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }) => {
      return <Status value={value}>{value}</Status>;
    },
  },
  {
    Header: 'Total',
    accessor: 'amount',
    disableFilters: true,
    Cell: ({ value }) => {
      return '$' + parseInt(value).toFixed(2).toLocaleString();
    },
  },
];

const InvoiceList = ({ isLatest }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => {
    let mappedInvoices = [];

    INVOICE_DATA.forEach((invoice) => {
      const customer = CUSTOMER_DATA.filter(
        (customer) => customer.customer_id === invoice.customer_id
      )[0];

      mappedInvoices.push(merge(invoice, customer));
    });

    if (isLatest)
      mappedInvoices = mappedInvoices
        .sort((a, b) => new Date(b.date_processed) - new Date(a.date_processed))
        .slice(0, 5);

    return mappedInvoices;
  }, [isLatest]);

  const history = useHistory();

  const handleRowClick = (invoice) => {
    history.push(`/invoice/${invoice.invoice_number}`);
  };

  return (
    <Table columns={columns} data={data} handleRowClick={handleRowClick} />
  );
};

export default InvoiceList;
