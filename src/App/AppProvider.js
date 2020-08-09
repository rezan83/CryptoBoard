import React, { useState } from "react";

export const AppContext = React.createContext()

export const AppProvider = (props) => {
    const [page, set_page] = useState("Settings")

    return (
        <AppContext.Provider value={[page, set_page]}>
            {props.children}
        </AppContext.Provider>
    );
}