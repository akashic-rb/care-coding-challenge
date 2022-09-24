import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import CoinPage from "pages/Coins/CoinPage";
import DetailPage from "pages/Coins/DetailPage";
import Logo from "components/Images/Logo";
import Menu from "components/Menu/Menu";

function App() {
  return (
    <div>
      <Router>
        <header className="cointainer-fluid d-flex align-items-center justify-content-between px-2 py-3">
          <Logo></Logo>
          <Menu></Menu>
        </header>
        <Routes>
          <Route path="/" element={ <CoinPage/> }></Route>
          <Route path="/coin/:id" element={ <DetailPage/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
