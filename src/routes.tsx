import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./view/Home/Index";
import Clients from "./view/Clients/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/clients" component={Clients} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
