import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/Home.page"));
const NoPage = lazy(() => import("./pages/NoPage.page"));
const ProvinceDetailsPage = lazy(() => import("./pages/ProvinceDetails.page"))
const ChooseProvincePage = lazy(() => import("./pages/ChooseProvince.page.mobile"))



function App() {
  return (
    // #1
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/choose" element={<ChooseProvincePage />} />
          <Route path="/:province/details" element={<ProvinceDetailsPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
