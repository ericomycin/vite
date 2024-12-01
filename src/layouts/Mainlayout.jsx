import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../pages/Footer";

export default function Mainlayout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
