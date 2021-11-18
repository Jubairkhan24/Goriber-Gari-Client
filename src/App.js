import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
// import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExploreItems from './Pages/Explore/ExploreItems';
import AddService from './Pages/AddService/AddService';
import Footer from './Pages/Home/Footer/Footer';
import UserOrder from './Pages/UserOrder/UserOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            {/* <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute> */}
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/userOrder/:serviceId">
              <UserOrder></UserOrder>
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/exploreItems">
              <ExploreItems></ExploreItems>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Route>
            <Footer></Footer>
          </Route>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
