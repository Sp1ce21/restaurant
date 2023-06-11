import { Route, Routes } from "react-router-dom";
import RedirectTo from "./components/redirect/RedirectTo";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import StartScreen from "./pages/startScreen/StartScreen";
import Table from "./pages/table/Table";
import Order from "./pages/order/Order";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/serve" element={<RedirectTo link="/serve/message" />} />
        <Route path="/serve/table" element={<Table />} />
        <Route path="/serve/table/:day/:hour/:id" element={<Order />} />
        <Route path="/" element={<StartScreen />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
