import { Route, Routes } from "react-router";
import Home from "../../features/pages/Home";

export default function Router(){
return <>
  <Routes>
    <Route path="/home" element={<Home />} />
  </Routes>
</>
}
