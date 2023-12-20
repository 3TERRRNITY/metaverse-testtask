import { Route, Switch } from "react-router-dom";
import { Home, WalletInfo } from "../pages";

function App() {
  return (
    <Switch>
      <Route path="/wallet/:id">
        <WalletInfo />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
