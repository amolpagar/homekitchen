import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ChefRegistrationPage from "./pages/Chef/ChefRegistrationPage/ChefRegistrationPage";
import CustomerRegistrationPage from "./pages/Customer/CustomerRegistrationPage/CustomerRegistrationPage";
import LoginPage from "./pages/Login/LoginPage";
// import KitchenPage from "./pages/KitchenPage/KitchenPage";
// import MenuItemsPage from "./pages/MenuItemsPage/MenuItemsPage";
// import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/chef-registration" Component={ChefRegistrationPage} />
          <Route
            path="/customer-registration"
            Component={CustomerRegistrationPage}
          />
          <Route path="/login" Component={LoginPage} />
          {/* <Route path="/kitchen" component={KitchenPage} />
          <Route path="/menu-items" component={MenuItemsPage} />
          <Route path="/order" component={OrderPage} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
