import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { SignIn } from "./pages/auth/SignIn";
import { SignUp } from "./pages/auth/SignUp";
import { Home } from "./pages/home/Home";
import { MyCart } from "./pages/cart/MyCart";
import { Account } from "./pages/account/Account";
import { Footer } from "./components/footer/Footer";
// context
import { SearchContext } from "./context/SearchContext";
// auth context
import { AuthContext } from "./context/auth/AuthContext";
// cart id context
import { MyCartIdContext } from "./context/MyCartIdContext";

export const App = () => {
  return (
    <>
      <SearchContext>
        <AuthContext>
          <MyCartIdContext>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<MyCart />} />
              <Route path="/account" element={<Account />} />
              <Route path="*" element={<h2>Error Check EndPoints</h2>} />
            </Routes>
            <Footer />
          </MyCartIdContext>
        </AuthContext>
      </SearchContext>
    </>
  );
};
