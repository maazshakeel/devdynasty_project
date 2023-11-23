import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import ChooseProvincePage from "./pages/ChooseProvince.page.mobile";

const HomePage = lazy(() => import("./pages/Home.page"));
const NoPage = lazy(() => import("./pages/NoPage.page"));
const BantenProvince = lazy(() => import("./pages/province/Banten.province"))
const DkiJakarta = lazy(() => import("./pages/province/DkiJakarta.province"))
const JawaBarat = lazy(() => import("./pages/province/JawaBarat.province"))
const JawaTimur = lazy(() => import("./pages/province/JawaTimur.province"))
const JawaTengah = lazy(() => import("./pages/province/JawaTengah.province"))
const Yogjakarta = lazy(() => import("./pages/province/Yogjakarta.province"))


function App() {
  return (
    // #1
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/banten" element={<BantenProvince />} />
          <Route path="/dkijakarta" element={<DkiJakarta />} />
          <Route path="/jawabarat" element={<JawaBarat />} />
          <Route path="/jawatimur" element={<JawaTimur />} />
          <Route path="/jawatengah" element={<JawaTengah />} />
          <Route path="/yogjakarta" element={<Yogjakarta />} />
          <Route path="/choose" element={<ChooseProvincePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
