import React from "react";
import Applayout from "./Applayout";
import { AppProvider } from "./AppProvider";
import Core from "./Core";

function App() {
    return (
        <>
            <Applayout>
                <AppProvider>
                    <Core />
                </AppProvider>
            </Applayout>
        </>
    );
}

export default App;
