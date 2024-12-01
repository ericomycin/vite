import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Homepage from "../pages/Homepage";
import Content from "../pages/Content";
import "../styles/App.css";
import Mainlayout from "../layouts/Mainlayout";
import Notfound from "../pages/404";



export default function App(){
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Mainlayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="/content" element={<Content/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<Notfound />} />
        </Routes>
      </Router>
  )
}