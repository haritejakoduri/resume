import React from "react"
import Resume from '../pages/resume'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Resume />} />
        </Routes>
      </BrowserRouter>
    );
}