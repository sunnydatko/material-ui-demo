// components
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Layout from "../components/core/Layout";

// pages
import CustomerAdd from "../pages/customers/CustomerAdd";
import CustomerDetail from "../pages/customers/CustomerDetail";
import Customers from "../pages/customers/Customers";
import Home from "../pages/dashboard/Home";
import InvoiceAdd from "../pages/invoices/InvoiceAdd";
import InvoiceDetail from "../pages/invoices/InvoiceDetail";
import Invoices from "../pages/invoices/Invoices";
import Payments from "../pages/payments/Payments";
import Settings from "../pages/settings/Settings";

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
