import React from "react";
import HeaderComponent from "../header/header";
import FooterComponent from "../footer/footer";
const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  )
}

export default MainLayout
