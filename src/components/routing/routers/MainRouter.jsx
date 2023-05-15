import React from "react";
import { Routes, Route } from "react-router-dom";
import AppRouter from "./AppRouter";

function MainRoute() {
    return (
        <>
            <Routes>
                <Route path="/*" element={<AppRouter />} />
            </Routes>
        </>
    );
}

export default MainRoute;
