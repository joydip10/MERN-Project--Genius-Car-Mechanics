import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import ServiceDesc from './Pages/Home/ServiceDesc/ServiceDesc';
import Login from './Pages/Login/Login';
import Header from './Pages/Header/Header';
import AuthProvider from './Pages/Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/services/:id">
            <ServiceDesc></ServiceDesc>
          </PrivateRoute>
          <PrivateRoute exact path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute exact path="/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
