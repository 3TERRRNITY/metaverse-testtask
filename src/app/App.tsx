import { BrowserRouter, Route } from "react-router-dom";
import { Home, WalletInfo } from "../pages";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/wallet/:id">
        <WalletInfo />
      </Route>
    </BrowserRouter>
  );
}

export default App;
