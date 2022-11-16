import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import RedirectTo from "./components/redirect/RedirectTo";
import StartScreen from "./pages/startScreen/StartScreen";
import Table from "./pages/table/Table";
import Contacts from "./pages/contacts/Contacts";
import Order from "./pages/order/Order";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/serve" element={<RedirectTo link="/serve/message" />} />
        <Route path="/serve/table" element={<Table />} />
        <Route path="/serve/table/:id" element={<Order />} />
        <Route path="/serve/contacts" element={<Contacts />} />
        <Route path="/" element={<StartScreen />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
