import "./App.css";

import { initializeApp } from "firebase/app";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OrderReview from "./components/OrderReview/OrderReview";
import Login from "./components/Login/Login";
import { getAuth } from "firebase/auth";
import SignUp from "./components/SignUp/SignUp";
import Shipping from "./components/Shipping/Shipping";
import ProductInfo from "./components/ProductInfo/ProductInfo";
export const ProductContext = createContext();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  console.log(cartItems);
  return (
    <ProductContext
      value={[
        { cartItems, setCartItems },
        { isLogedIn, setIsLogedIn },
        { user, setUser },
        { totalPrice, setTotalPrice },
      ]}
    >
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <Header></Header>,<Shop></Shop>
              </>
            }
          />
          <Route
            path="/inventory"
            element={
              <PrivateRoute>
                <Header></Header>, <Inventory></Inventory>
              </PrivateRoute>
            }
          />
          <Route
            path="/orderReview"
            element={
              <PrivateRoute>
                <Header></Header>, <OrderReview></OrderReview>
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header></Header>, <Login></Login>
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header></Header>, <SignUp></SignUp>
              </>
            }
          />
          <Route
            path="/shipping"
            element={
              <PrivateRoute>
                <Header></Header>, <Shipping></Shipping>
              </PrivateRoute>
            }
          />
          <Route
            path="/productInfo/:id"
            element={
              <>
                <Header></Header>, <ProductInfo></ProductInfo>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ProductContext>
  );
}

export default App;
