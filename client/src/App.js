import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Users } from "./pages/Users";
import { Customers } from "./pages/Customers";
import { Leads } from "./pages/Leads";
import { Support } from "./pages/Support";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/users" component={Users} />
          <Route path="/customers" component={Customers} />
          <Route path="/leads" component={Leads} />
          <Route path="/support" component={Support} />
          
        </Switch>
    </Router>
  );
}

export default App;
