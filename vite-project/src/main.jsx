import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalculateCredit from "./components/CalculateCredit";
import AngsuranList from "./components/AngsuranList";
import TotalPenaltyFee from "./components/TotalPenaltyFee";

const root = createRoot(document.getElementById("root"));

root.render(
    <Router>
        <Routes>
            <Route path="/hitung-angsuran" element={<AngsuranList />} />
            <Route path="/" element={<CalculateCredit />} />
            <Route path="total-penalty" element={<TotalPenaltyFee/>} />
        </Routes>
    </Router>
);
