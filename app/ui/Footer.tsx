

import React from "react";
import { getCurrentYear } from "../utils/dateUtils";

export default function Footer() {
    const year = getCurrentYear();
    return (
        <> 
        <footer className="p-3 text-lg text-center font-sans border rounded-xl m-2">
             {year} Noble All rights reserved
        </footer>
        </>
    )
}