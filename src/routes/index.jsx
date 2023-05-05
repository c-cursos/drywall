

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Pages from "../app/views/index";

export default function AppRoutes() {
    
    return( <>
        <Routes>
            <Route path="/" element={ <Pages.Home /> } />
            <Route path="/links" element={ <Pages.Links /> } />
            <Route path="/drywall" element={ <Pages.Drywall /> } />
        </Routes>
    </> );
}




