import "./App.css";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/Home.page"));
const NoPage = lazy(() => import("./pages/NoPage.page"));


function App() {
  return (
    // #1
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
