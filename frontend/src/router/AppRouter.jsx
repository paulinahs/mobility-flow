import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Results from "../pages/Results";
import RouteDetails from "../pages/RouteDetails";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/journey/:id" element={<RouteDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;