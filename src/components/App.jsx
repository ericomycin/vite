import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from "../pages/Homepage";
import Content from "../pages/Content";
import "../styles/App.css";
import Mainlayout from "../layouts/Mainlayout";
import Notfound from "../pages/Notfound";



export default function App(){
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Mainlayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="/content" element={<Content/>}/>
          </Route>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Router>
  )
}