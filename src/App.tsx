import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import CoinPage from "pages/Coins/CoinPage";
import DetailPage from "pages/Coins/DetailPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <CoinPage/> }></Route>
          <Route path="/coin/:id" element={ <DetailPage/> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
