// components
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Layout from "../components/core/Layout";
import CustomerAdd from "../components/customers/CustomerAdd";
import CustomerDetail from "../components/customers/CustomerDetail";
import Customers from "../components/customers/Customers";
import Home from "../components/dashboard/Home";
import InvoiceAdd from "../components/invoices/InvoiceAdd";
import InvoiceDetail from "../components/invoices/InvoiceDetail";
import Invoices from "../components/invoices/Invoices";
import Payments from "../components/payments/Payments";
import Settings from "../components/settings/Settings";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route component={Home} path="/home" />
          <Route component={Customers} path="/customers" />
          <Route component={CustomerAdd} exact path={"/customer/add"} />
          <Route component={CustomerDetail} exact path={`/customer/:id`} />
          <Route component={Invoices} path="/invoices" />
          <Route component={InvoiceAdd} exact path={"/invoice/add"} />
          <Route component={InvoiceDetail} exact path={`/invoice/:id`} />
          <Route component={Payments} path="/payments" />
          <Route component={Settings} path="/settings" />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
