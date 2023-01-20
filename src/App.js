import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./container/header/header";

import Sitebar from "./container/sitebar";
import Overview from "./pages/overview/overview";
import Tickets from "./pages/tickets/tickets";
import OverviewSingle from "./pages/overview-single/overviewSingle";
import OverviewRating from "./pages/overviewRating/overviewRating";
import TicketsList from "./pages/ticketsList/ticketsList";
import Ideas from "./pages/ideals/ideals";
import Error from "./pages/error/error";
import { Products } from "./pages/products/products";
import SingleProduct from "./pages/single-product/singleProduct";
import { Amount } from "./pages/amount/amount";
import { SingleAmount } from "./pages/singleAmount/singleAmount";
import { TypesTickets } from "./pages/typesTickets/typesTickets";
import { SingleTypes } from "./pages/single-types/singleTypes";
import { Contacts } from "./pages/contacts/contacts";
import { Agents } from "./pages/agents/agents";
import { Articles } from "./pages/articles/articles";
import { Settings } from "./pages/settings/settings";
import { Subscription } from "./pages/subscriptions/subscriptions";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sitebar />

        <div className="main__right">
          <Header />

          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/statistics/:id" element={<OverviewSingle />} />
            <Route path="/statistics/:id/products" element={<Products />} />
            <Route
              path="/statistics/:id/products/:productId"
              element={<SingleProduct />}
            />

            <Route path="/rating/:id" element={<OverviewRating />} />
            <Route path="/rating/:ticketsId/amounts" element={<Amount />} />
            <Route
              path="/rating/:ticketsId/amounts/:amountId"
              element={<SingleAmount />}
            />

            <Route path="/ticket/:id" element={<TicketsList />} />
            <Route path="/ticket/:id/types" element={<TypesTickets />} />
            <Route
              path="/ticket/:id/types/:typesId"
              element={<SingleTypes />}
            />

            <Route path="/tickets" element={<Tickets />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/subscription" element={<Subscription />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
