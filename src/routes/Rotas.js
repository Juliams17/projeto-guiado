import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "../components/pages/Home/Home"
import ListPage from "../components/pages/List/ListPage"


function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/lista" component={ListPage} />
        
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;

