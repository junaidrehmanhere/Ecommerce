import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./component/nav/navbar.css";

import HomeCopmonent from "./pages/home/home";
import Product from "./pages/product/product";
import NavBar from "./component/nav/navbar";
import OrderConfirm from "./pages/order/oderconfirm";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Contact from "./pages/contact/contac";
import ProductDetail from "./pages/ProductDetail/productDetail";
import Category from "./component/category/category";
import LogIn from "./component/logIn/login";
import User from "./pages/userdashboard/user";
import SignUp from "./component/signup/signup";
import Cart from "./pages/Cart/Cart";
import ProtectedRoute from "./component/ProtectedRoutes/ProtectedRoute";
import StateContext from "./component/context/statecontext/statelongincontext";
import Footer from "./pages/Footer/Footer";
import GoToTop from "./component/gototop/GoToTop";

function App() {
  return (
    <>
      <StateContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeCopmonent />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/home" element={<HomeCopmonent />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/product/:categories?" element={<Product />} />
          <Route path="/order-confirm" element={<OrderConfirm />} />
          <Route path="/contact-page" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="user-dashboard"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <GoToTop/>
          <Footer/>
      </StateContext>
    </>
  );
}

export default App;
