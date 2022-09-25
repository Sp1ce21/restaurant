import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import RedirectTo from "./components/redirect/RedirectTo";
import StartScreen from "./pages/startScreen/StartScreen";
import MessagePage from "./pages/message/MessagePage";
import Table from "./pages/table/Table";
import Contacts from "./pages/contacts/Contacts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/serve" element={<RedirectTo link="/serve/message" />} />
        <Route path="/serve/message" element={<MessagePage />} />
        <Route path="/serve/table" element={<Table />} />
        <Route path="/serve/contacts" element={<Contacts />} />
        <Route path="/" element={<StartScreen />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
